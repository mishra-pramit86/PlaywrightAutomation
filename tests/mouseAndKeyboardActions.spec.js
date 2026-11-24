const{test,expect}=require('@playwright/test');

test('Hover and click submenu', async({page}) => {

    await page.goto('https://demoqa.com/menu')
    await page.getByText('Main Item 2', {exact:true}).hover();
    const submenu = page.getByText('SUB SUB LIST »');
    await expect(submenu).toBeVisible();
    await submenu.hover()
  
});
test.only('Right click - Context menu', async({page}) => {

    await page.goto('https://practice.expandtesting.com/context-menu')

    const [dialog] = await Promise.all([
        page.waitForEvent('dialog'),
        page.locator('#hot-spot').click({button: 'right'})

    ])
    await expect(dialog.message()).toContain(
            'You selected a context menu')
    //const dialogPromise = page.waitForEvent('dialog');
    //await page.locator('#hot-spot').mouse.click({button: 'right'})
    //const dialog = await dialogPromise
    //console.log("Dialog Message:", dialog.message())
    await dialog.accept();
})
test('Drag and drop A into B', async({page}) => {

    await page.goto("https://practice.expandtesting.com/drag-and-drop")
    const firstBox = page.locator('#column-a')
    const secondBox = page.locator('#column-b')

    await firstBox.dragTo(secondBox)

    await expect(firstBox).toContainText('B')
    await expect(secondBox).toContainText('A')
})
