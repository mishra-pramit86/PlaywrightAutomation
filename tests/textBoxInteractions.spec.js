const {test, expect} = require('@playwright/test');
test('Keyboard Interactions', async({page})=> {

    await page.goto('https://www.saucedemo.com/')
    const userName = page.getByRole("textbox", {name: 'Username'})
    await userName.fill('standard_user')
    await userName.press('Control+A')

    await userName.pressSequentially('problem_user', {
        delay: 200
    })
    console.log(await userName.inputValue());
    const passField = page.locator('#password')
    await passField.fill('secret_sauce')
    //expect(passField).toBe('secret_sauce');
    //This throws error as toBe compares object to string as toBe compares strict equality
    await expect(passField).toHaveValue('secret_sauce');
    await expect(passField).toBeEditable();
    

})