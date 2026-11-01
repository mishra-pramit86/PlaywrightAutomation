const {test, expect} = require('@playwright/test');
const path = require('path');

test('Single File Upload', async({page})=> {

    await page.goto('https://the-internet.herokuapp.com/upload')

    const filePath = path.join(__dirname, '../test-data/Sample.jpg')
    //const filePath = 'E:/Images of different format/JPG/Sample.jpg'

    await page.locator('#file-upload').setInputFiles(filePath);
    await page.locator('#file-submit').click();

    await expect(page.getByText('File Uploaded!')).toHaveText('File Uploaded!');

})

test.only('Download File using saveas', async({page})=> {

    await page.goto('https://the-internet.herokuapp.com/download')

    const downloadPromise = page.waitForEvent('download');
    await page.locator('a').nth(4).click();
    const download = await downloadPromise; // Capture download object
    const fileName = download.suggestedFilename(); //Get the downloaded file name
    
    await download.saveAs('downloads/' + fileName)

})