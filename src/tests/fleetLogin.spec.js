import { test } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://staging-fe.fleetconnect.io/login');
  await page.getByRole('tab', { name: 'OTP' }).click();
  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill('user@enterprise.com');
  await page.getByRole('textbox', { name: 'Email' }).press('Enter');
  await page.getByRole('textbox').nth(1).fill('');
  await page.getByRole('textbox').nth(1).click();
  await page.getByRole('textbox').nth(1).fill('0000');
  await page.getByRole('button', { name: 'Login' }).click();
//   await page.getByRole('textbox').nth(1).fill('0000');
});