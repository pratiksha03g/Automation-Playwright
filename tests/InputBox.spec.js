const { test, expect } = require('@playwright/test');

test('Handle Inputbox', async ({ page }) => {

    await page.setContent(`
        <label for="first-name">First name</label>
        <input id="first-name" />
    `);


    // Inputbox- firstname
    const firstNameInput = page.locator('#first-name');
    await expect(firstNameInput).toBeVisible();
    await expect(firstNameInput).toBeEmpty();
    await expect(firstNameInput).toBeEditable();
    await expect(firstNameInput).toBeEnabled();
    
    await firstNameInput.fill('John');
    await expect(firstNameInput).toHaveValue('John');


    // Date input
    // await page.getByLabel('Birth date').fill('2020-02-02');

    // Time input
    // await page.getByLabel('Appointment time').fill('13:15');

    // Local datetime input
    // await page.getByLabel('Local time').fill('2020-03-02T05:15');


});