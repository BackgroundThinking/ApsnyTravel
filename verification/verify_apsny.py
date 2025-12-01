from playwright.sync_api import sync_playwright, expect

def verify_site():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        # Navigate to home
        page.goto("http://localhost:3001")

        # Check Hero Text
        expect(page.get_by_role("heading", name="Влюбляю в Абхазию")).to_be_visible()
        expect(page.get_by_text("Индивидуальные авторские туры")).to_be_visible()

        # Check Trust Signals
        expect(page.get_by_text("30+ лет стажа")).to_be_visible()
        expect(page.get_by_role("heading", name="Фото-бонус")).to_be_visible()

        # Screenshot Home
        page.screenshot(path="verification/home.png")
        print("Home verified")

        # Navigate to About
        page.get_by_role("link", name="Об автопарке").click()
        expect(page).to_have_url("http://localhost:3001/about")

        # Check About Content
        expect(page.get_by_text("Меня зовут Александр (Алекс)")).to_be_visible()
        expect(page.get_by_text("Mercedes-Benz E-Class")).to_be_visible()
        expect(page.get_by_text("Peugeot 308 CC")).to_be_visible()
        expect(page.get_by_text("Нет туристическим ловушкам")).to_be_visible()

        # Screenshot About
        page.screenshot(path="verification/about.png")
        print("About verified")

        browser.close()

if __name__ == "__main__":
    verify_site()
