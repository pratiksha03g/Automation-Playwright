import { test } from '@playwright/test';

test('test', async ({ page }) => {
  await page.setContent(`
    <form>
      <input id="username" aria-label="Organization" />
      <button id="flt-pv-0" type="button">Select organization</button>
      <input id="current-password" type="password" />
    </form>
  `);

  const username = page.locator('#username');
  await username.fill('PSPl');
  await page.locator('#flt-pv-0').click();

  await username.fill('SYS-ENTRy');
  await page.locator('#current-password').fill('abcd');
  await page.locator('#current-password').press('Enter');
});
  

  