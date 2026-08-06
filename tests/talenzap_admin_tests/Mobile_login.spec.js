import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://staging-fe.talenzap.com/login');
  await page.getByRole('button', { name: 'Login with Phone call' }).click();
  await page.getByPlaceholder('Enter your phone number').click();
  await page.getByPlaceholder('Enter your phone number').fill('1234567890');
  await page.getByPlaceholder('Enter your phone number').press('Enter');
  await page.getByRole('textbox').fill('');
  await page.getByRole('textbox').click();
  await page.getByRole('textbox').fill('1234');
  await page.getByRole('button', { name: 'Submit' }).click();
});