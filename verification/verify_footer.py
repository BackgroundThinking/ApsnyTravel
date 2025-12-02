
from playwright.sync_api import sync_playwright

def verify_footer():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        try:
            # Go to the homepage (default Vite port)
            page.goto("http://localhost:3000")

            # Scroll to bottom to see footer
            page.evaluate("window.scrollTo(0, document.body.scrollHeight)")

            # Wait a bit for any lazy loading or rendering
            page.wait_for_timeout(1000)

            # Screenshot the footer area specifically or just the bottom of the page
            # Ideally we'd select the footer element, but full page or viewport bottom is fine
            page.screenshot(path="verification/footer_check.png")

            # Print title to confirm we loaded something
            print(f"Page title: {page.title()}")

        except Exception as e:
            print(f"Error: {e}")
        finally:
            browser.close()

if __name__ == "__main__":
    verify_footer()
