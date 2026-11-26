const { test, expect } = require('@playwright/test');

test('Soft assertions', async ({ page }) => {

    await page.goto('https://www.demoblaze.com/index.html');

    await expect.soft(page).toHaveTitle(/STORE/i);
    await expect.soft(page).toHaveURL('https://www.demoblaze.com/index.html');
    await expect.soft(page.locator('.navbar-brand')).toBeVisible();
});