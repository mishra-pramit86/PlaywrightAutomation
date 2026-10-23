const {test, expect, firefox} = require('@playwright/test');
const {chromium} = require('playwright')

test('Browser Launch test-Chrome', async () => {
    
    const browser = await chromium.launch({
        headless: false
    })
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://www.google.com/');
    console.log('Chrome title', await page.title());
    await expect(page).toHaveTitle('Google');
    await context.close();
})

test('Browser Launch test-Firefox', async() => {

    const firefoxBrowser = await firefox.launch({
        headless: false

    })
    const context = await firefoxBrowser.newContext();
    const page = await context.newPage();
    await page.goto('https://www.google.com/');
    console.log('Chrome title', await page.title());
    await expect(page).toHaveTitle('Google');
    await firefoxBrowser.close(); 

})

    