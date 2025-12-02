from playwright.sync_api import sync_playwright

def verify_booking_form():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        # Navigate to a tour detail page where the booking form exists
        # Port is 3000 according to logs
        try:
            page.goto("http://localhost:3000/catalog")
            # Click first tour link
            page.locator("a", has_text="Подробнее").first.click()
        except Exception as e:
            print(f"Navigation failed: {e}")
            return

        # Wait for the booking form to be visible
        page.wait_for_selector("form")

        # Scroll to the form
        booking_form = page.locator("form")
        booking_form.scroll_into_view_if_needed()

        # Check for the placeholder in the phone input
        phone_input = page.locator("input[name='client_contact']")
        placeholder = phone_input.get_attribute("placeholder")
        print(f"Phone placeholder: {placeholder}")

        # Fill the form to get the success message
        page.fill("input[name='client_name']", "Test User")
        page.fill("input[name='client_contact']", "+79991234567")
        # Set a future date
        # Calculate tomorrow's date YYYY-MM-DD
        page.evaluate("document.querySelector('input[name=\"desired_date\"]').valueAsDate = new Date(Date.now() + 86400000)")

        page.fill("input[name='pax']", "2")
        page.check("input[name='consent']")

        # Submit
        page.click("button[type='submit']")

        # Wait for success message
        try:
            page.wait_for_selector("text=Заявка отправлена", timeout=5000)
        except:
             print("Success message not found. Taking screenshot of current state.")
             page.screenshot(path="verification/booking_failure.png")
             browser.close()
             return

        # Take screenshot of the success message to verify owner name
        page.screenshot(path="verification/booking_success.png")

        # Verify text content
        content = page.content()
        if "Александр" in content:
             print("Found 'Александр' in content.")
        else:
             print("'Александр' NOT found in content.")

        browser.close()

if __name__ == "__main__":
    verify_booking_form()
