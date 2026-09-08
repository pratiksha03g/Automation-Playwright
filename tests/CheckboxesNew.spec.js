const { test, expect } = require('@playwright/test');

test('Handle checkboxes', async ({ page }) => {

    await page.goto('https://qa-dashboard.azurewebsites.net/Identity/Account/Login?ReturnUrl=%2F');

    const rememberMeCheckbox = page.locator("//input[@id='Input_RememberMe' and @type='checkbox']");
    await rememberMeCheckbox.check();

    await expect(rememberMeCheckbox).toBeChecked();
});