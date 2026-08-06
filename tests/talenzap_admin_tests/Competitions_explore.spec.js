import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://staging-fe.talenzap.com/categories');
  await page.getByRole('link', { name: 'Competitions' }).click();
  await page.getByRole('tab', { name: 'Draft' }).click();
  await page.getByRole('tab', { name: 'Active' }).click();
  await page.getByRole('tab', { name: 'Upcoming' }).click();
  await page.getByRole('tab', { name: 'Ended' }).click();
  await page.getByPlaceholder('Search for Competition Name').click();
  await page.getByPlaceholder('Search for Competition Name').fill('Music');
  await page.getByRole('button', { name: 'Filter' }).click();
  await page.getByLabel('Filter').getByText('Dance styles').click();
  await page.locator('html').dblclick();
  await page.getByLabel('Clear filters').click();
  await page.getByPlaceholder('Search for Competition Name').click();
  await page.getByPlaceholder('Search for Competition Name').fill('');
  await page.getByRole('tab', { name: 'All' }).click();
});