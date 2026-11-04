const {test, expect} = require('@playwright/test');

test('Single Select Dropdown', async({page})=> {

    await page.goto('https://the-internet.herokuapp.com/dropdown')
    await page.locator('#dropdown').selectOption('Option 1')

    await expect(page.locator('#dropdown')).toHaveValue('1')

})

test('Handle Multiselect Dropdown', async({page})=> {

    await page.goto('https://demoqa.com/select-menu')
    const dropdown = page.locator('#cars')

    await dropdown.selectOption([
        'volvo',
        'opel',
        'audi'
    ])

    await expect(dropdown).toHaveValues([
        'volvo',
        'opel',
        'audi'
    ])

})