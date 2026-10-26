const {test, expect} = require('@playwright/test')

test('Handle New tab- Method 1', async({browser})=> {

    const context = await browser.newContext()
    const page = await context.newPage()
    await page.goto('https://saucelabs.com/')
    const newPagePromise = context.waitForEvent('page')
    await page.locator('.announcement-arrow-right').click();
    const newPage = await newPagePromise
    await newPage.waitForLoadState('domcontentloaded')
    console.log('New tab URL', newPage.url());

})

test.only('Handle New tab- Method 2', async({browser})=> {

    const context = await browser.newContext()
    const page = await context.newPage()
    await page.goto('https://saucelabs.com/')
    const[newPage] = await Promise.all([

        context.waitForEvent('page'),
        page.locator('.announcement-arrow-right').click()

    ])

    await newPage.waitForLoadState('domcontentloaded')
    console.log('New tab URL', newPage.url());


})