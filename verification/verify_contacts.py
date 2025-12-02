from playwright.sync_api import sync_playwright

def verify_contacts(page):
    # Navigate to the Contacts page
    page.goto("http://localhost:3000/contacts")

    # Wait for the page to load
    page.wait_for_selector("h1")

    # Verify phone number - use first() or specific locator
    # There are multiple instances (one in main content, one in footer possibly)
    phone_element = page.locator("a[href='tel:+79068880889']").first
    if not phone_element.is_visible():
        raise Exception("Phone number link not found or not visible")

    # Verify address
    address_element = page.get_by_text("Сочи, Новороссийское Шоссе 27").first
    if not address_element.is_visible():
        raise Exception("Address not found or not visible")

    # Take screenshot of the contacts page
    page.screenshot(path="verification/contacts_verification.png")

    # Navigate to home and check footer
    page.goto("http://localhost:3000")

    # Wait for footer
    page.wait_for_selector("footer")

    # Verify address in footer
    footer_address = page.locator("footer").get_by_text("Сочи, Новороссийское Шоссе 27")
    if not footer_address.is_visible():
        raise Exception("Address not found in footer")

    page.screenshot(path="verification/footer_verification.png")

if __name__ == "__main__":
    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page()
        try:
            verify_contacts(page)
            print("Verification successful!")
        except Exception as e:
            print(f"Verification failed: {e}")
        finally:
            browser.close()
