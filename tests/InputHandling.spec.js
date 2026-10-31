const {test, expect} = require('@playwright/test');

test('Practice text Inputs', async({page})=> {

    await page.goto('https://www.playwrightautomation.com/practice.html')
    const firstName = page.getByPlaceholder('Enter your name')
    await firstName.fill("Pramit Mishra")
    await firstName.fill("");
    await firstName.pressSequentially("Pramit Mishra")
    await expect(firstName).toBeVisible("Pramit Mishra")
    await expect(firstName).toHaveValue("Pramit Mishra") // This will throw error 
    console.log(await firstName.inputValue());
 
    await page.getByPlaceholder('Enter your email').fill('pramitm@abc.com')
    await page.getByPlaceholder('Enter your address').fill('Shyam Nagar Kanpur')

    await page.getByRole("radio", {name: "Male", exact: true}).check(); //test for radio buttons
    await expect(page.getByRole("radio", {name: "Male", exact: true})).toBeChecked();

    await page.getByRole("button", {name:'submit'}).click();

    


})