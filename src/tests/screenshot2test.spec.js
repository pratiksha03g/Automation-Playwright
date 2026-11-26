//using screenshot: 'on' in config file

const { test } = require('@playwright/test');
const {
  getDemoBlazeCredentials,
  hasDemoBlazeCredentials,
} = require('../testdata/credentials');

test('test', async ({ page }) => {
  test.skip(!hasDemoBlazeCredentials(), 'Set DemoBlaze credentials in .env to run this test.');
  const credentials = getDemoBlazeCredentials();

  await page.goto('/');

  await page.getByRole('link', { name: 'Log in' }).click();
  await page.locator('#loginusername').fill(credentials.username);
  await page.locator('#loginpassword').fill(credentials.password);
  await page.getByRole('button', { name: 'Log in' }).click();


});