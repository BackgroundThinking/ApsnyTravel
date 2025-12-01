from playwright.sync_api import sync_playwright

def verify_home_and_about():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        # Verify Home Page (port 3000 as per vite.config.ts)
        page.goto("http://localhost:3000/")
        page.wait_for_selector("text=Я влюбляю вас в Абхазию")
        page.screenshot(path="verification/home.png", full_page=True)
        print("Home page verified")

        # Verify About Page
        page.goto("http://localhost:3000/about")
        page.wait_for_selector("text=Apsny Travel — с любовью к Кавказу")
        page.screenshot(path="verification/about.png", full_page=True)
        print("About page verified")

        browser.close()

if __name__ == "__main__":
    verify_home_and_about()
