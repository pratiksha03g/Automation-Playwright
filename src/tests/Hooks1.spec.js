import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('/');
});

test('opens the DemoBlaze home page', async ({ page }) => {
  await expect(page).toHaveURL(/demoblaze\.com/);
});