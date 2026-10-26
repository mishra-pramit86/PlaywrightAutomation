const{test, expect} = require('@playwright/test')

test('Playwright Locators', async({page})=> {

    await page.goto("https://rahulshettyacademy.com/angularpractice/")
    await page.getByLabel("Check me out if you Love IceCreams!").click();
    await page.getByLabel("Employed").check();
    await page.getByLabel("Gender").selectOption('Male')
    await page.getByPlaceholder("Password").fill("abc123");
    await page.getByRole("button", {name:'Submit'}).click();
    await page.getByText("Success! The Form has been submitted successfully!.").isVisible();
    await page.getByRole("link", {name: "Shop"}).click();


})

test.only('Playwright Locators2', async({page})=> {

    await page.goto("https://saucelabs.com/");
    await page.locator('button[aria-label="Close this consent banner"]').click();
    await page.getByRole("link", {name: "Start Free"}).first().click();
    await page.getByTitle("Authenticate with Email").click();
    await page.getByPlaceholder("Business Email").fill("pramitm@abc.com")
    await page.getByPlaceholder("Username").fill("pramitx")

    


})

