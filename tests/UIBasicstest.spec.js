//const test = require("node:test");

const {test, expect} = require('@playwright/test')

test('Browser Playwright test' , async ({browser})=> 
{
    //chrome - plugins/ cookies
    
    const context = await browser.newContext();
    //const newPagePromise = context.waitForEvent('page');
    const page = await context.newPage();
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/")
    const signIn = page.locator("#signInBtn");
    const userName = page.locator('#username');
    const cardTitles = page.locator(".card-body a");
    await userName.fill('rahulshettyacademy');
    await page.locator("#password").fill('learning')
    await signIn.click();
    console.log(await page.locator("[style*='block']").textContent());
    await expect(page.locator("[style*='block']")).toContainText('learning');
    await userName.fill("");
    await userName.fill("rahulshettyacademy")
    await page.locator("#password").fill('Learning@830$3mK2')
    await signIn.click();
    console.log(await cardTitles.first().textContent());
    console.log(await cardTitles.nth(1).textContent());

});

test('Page Playwright test' , async ({page})=> 
{
  
    await page.goto("https://www.google.com")
    console.log(await page.title());
    await expect(page).toHaveTitle('Google')
    
});

test.only('Handle new tab', async ({browser})=> {

    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://saucelabs.com/')
    const newPagePromise = context.waitForEvent('page');
    await page.locator('.announcement-arrow-right').click();
    const newPage2 = await newPagePromise;
    await newPage2.waitForLoadState('domcontentloaded');
    console.log('New tab URL', newPage2.url());


})


