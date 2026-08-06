import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://staging-fe.talenzap.com/login');
  await page.getByPlaceholder('example@gmail.com').click();
  await page.getByPlaceholder('example@gmail.com').fill('admin@example.com');
  await page.getByPlaceholder('example@gmail.com').press('Tab');
  await page.getByPlaceholder('Enter your password').fill('Admin@123');
  await page.getByPlaceholder('Enter your password').press('Enter');
});
  