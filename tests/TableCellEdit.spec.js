const { test, expect } = require('@playwright/test')

// Finds the table row that contains a given cell value and clicks that row's Edit button.
// Demo site: https://demoqa.com/webtables (each row has an Edit icon with title="Edit").
// To adapt to your own app, change the URL, the row selector and the edit button locator below.

test('Go to a cell in a table and click edit', async ({ page }) => {

    await page.goto("https://demoqa.com/webtables");

    // 1. Locate the cell by its text (e.g. the email "cierra@example.com")
    const cell = page.getByRole('gridcell', { name: 'cierra@example.com' });
    await expect(cell).toBeVisible();

    // 2. Go up to the row that owns this cell
    const row = page.getByRole('row').filter({ has: cell });

    // 3. Click the Edit button inside that same row
    await row.locator('span[title="Edit"]').click();

    // 4. Verify the edit form opened with the existing value prefilled
    await expect(page.locator('#registration-form-modal')).toBeVisible();
    await expect(page.locator('#userEmail')).toHaveValue('cierra@example.com');

})

// Reusable helper: edit the row containing any cell text
async function clickEditForCell(page, cellText) {
    const row = page.getByRole('row').filter({ hasText: cellText });
    await row.locator('span[title="Edit"]').click();
}

test('Edit using a reusable helper', async ({ page }) => {

    await page.goto("https://demoqa.com/webtables");

    await clickEditForCell(page, 'Kierra');

    await expect(page.locator('#firstName')).toHaveValue('Kierra');

})
