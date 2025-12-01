from playwright.sync_api import sync_playwright

def verify_changes():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        # 1. Verify Home Page
        print("Navigating to Home...")
        try:
            page.goto("http://localhost:3000/", timeout=30000)
            page.wait_for_load_state("networkidle")
        except Exception as e:
            print(f"Failed to load home page: {e}")
            return

        # Verify slogan
        print("Checking slogan...")
        try:
             slogan = page.get_by_text("Влюбляю в Абхазию!")
             if slogan.is_visible():
                print("Slogan found!")
             else:
                print("Slogan NOT found!")
        except:
             print("Error finding slogan")

        page.screenshot(path="verification/home_page.png", full_page=True)
        print("Home screenshot saved.")

        # 2. Verify About Page
        print("Navigating to About...")
        page.goto("http://localhost:3000/about")
        page.wait_for_load_state("networkidle")

        # Verify new sections
        print("Checking fleet info...")
        if page.get_by_text("Peugeot 308 CC").is_visible():
             print("Peugeot 308 CC found!")

        print("Checking reviews...")
        if page.get_by_text("Отзывы наших гостей").is_visible():
             print("Reviews section found!")

        page.screenshot(path="verification/about_page.png", full_page=True)
        print("About screenshot saved.")

        # 3. Verify Transfers Page
        print("Navigating to Transfers...")
        page.goto("http://localhost:3000/transfers")
        page.wait_for_load_state("networkidle")

        print("Checking transfer prices...")
        # Use exact=True to avoid matching "1 999" when looking for "999"
        if page.get_by_text("999 руб.", exact=True).is_visible():
             print("Price 999 руб found!")

        page.screenshot(path="verification/transfers_page.png", full_page=True)
        print("Transfers screenshot saved.")

        browser.close()

if __name__ == "__main__":
    verify_changes()
