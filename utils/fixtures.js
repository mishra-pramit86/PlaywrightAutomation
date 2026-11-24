const base = require('@playwright/test')

exports.customtest = base.test.extend({

    authenticatedPage: async({browser}, use) => {

        const context = await browser.newContext();
        const page = await context.newPage();
        await page.goto('https://rahulshettyacademy.com/client')
        await page.locator('#userEmail').fill("rahulshettyw@gmail.com");
        await page.locator('#userPassword').fill("Learning@830$3mK3")
        await page.locator('[value="Login"]').click();
        await page.waitForLoadState('networkidle');
        await use(page);
    }
})