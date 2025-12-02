import sys
from playwright.sync_api import sync_playwright

def verify(page):
    page.goto('http://localhost:3000')
    page.wait_for_selector('h1')
    page.screenshot(path='verification/home.png')

    page.goto('http://localhost:3000/about')
    page.wait_for_selector('h1')
    page.screenshot(path='verification/about.png')

with sync_playwright() as p:
    browser = p.chromium.launch()
    page = browser.new_page()
    try:
        verify(page)
    except Exception as e:
        print(e)
    finally:
        browser.close()
