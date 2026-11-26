const { test } = require('@playwright/test');

test('Built-inLocators', async ({ page }) => {
  await page.goto('/');

  const laptopsLink = page.getByRole('link', { name: 'Laptops' });
  console.log('Laptops link locator:', laptopsLink);
});