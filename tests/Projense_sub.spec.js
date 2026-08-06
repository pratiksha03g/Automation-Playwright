import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
    await page.goto('https://projense-app.web.app/');

  await page.pause()

  await page.locator('#username').nth(4).click();
  await page.locator('#username').nth(4).fill('PSPl');
  await page.locator('#flt-pv-0 div').click();


  await page.locator('#username').nth(2).click();
  await page.locator('#username').nth(2).fill('SYS-ENTRy');
  await page.locator('#current-password').fill('abcd');
  await page.locator('#current-password').press('Enter');




  });
  
  