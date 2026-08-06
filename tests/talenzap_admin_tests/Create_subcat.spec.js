import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://staging-fe.talenzap.com/competition');
 await page.getByRole('row', { name: 'Hip-Hop Disabled' }).getByRole('img').first().click();
  await page.getByPlaceholder('Enter sub category name').click();
  await page.getByPlaceholder('Enter sub category name').fill('Hip-Hop1');
  await page.getByRole('button', { name: 'Edit name' }).click();
  await page.getByRole('button', { name: 'Add sub category' }).click();
  await page.getByPlaceholder('Enter sub category name').click();
  await page.getByPlaceholder('Enter sub category name').fill('Salsa');
  await page.getByRole('button', { name: 'Add sub category' }).click();
  await page.getByLabel('Add item').click();
  await page.getByRole('button', { name: 'Add sub category' }).click();
  await page.getByText('Salsa', { exact: true }).click();
  await page.getByPlaceholder('Enter sub category name').click();
  await page.getByPlaceholder('Enter sub category name').fill('SalsaNew');
  await page.getByPlaceholder('Enter sub category name').press('Enter');
  await page.locator('div').filter({ hasText: /^Salsa$/ }).getByRole('button').click();
  await page.getByRole('button', { name: 'Add sub category' }).click();
  await page.getByLabel('Go back').click();
});