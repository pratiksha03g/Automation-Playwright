const { test, expect } = require('@playwright/test');

test('AssertionsTest', async ({ page }) => {
  await page.setContent(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>nopCommerce demo store. Register</title>
      </head>
      <body>
        <div class="header-logo">
          <img src="logo.png" alt="Logo" />
        </div>

        <input id="small-searchterms" placeholder="Search store" />

        <label>
          <input id="gender-male" type="radio" name="gender" checked /> Male
        </label>

        <label>
          <input id="Newsletter" type="checkbox" checked /> Newsletter
        </label>
      </body>
    </html>
  `);

  // 1] expect(page).toHaveURL() // page has URL
  await expect(page).toHaveURL(/about:blank/);

  // 2] expect(page).toHaveTitle() // page has title
  await expect(page).toHaveTitle('nopCommerce demo store. Register');

  // 3) expect(locator).toBeVisible() // element is visible
  const logoElement = page.locator('.header-logo');
  await expect(logoElement).toBeVisible();

  // 4) expect(locator).toBeEnabled() // control is enabled
  const searchStoreBox = page.locator('#small-searchterms');
  await expect(searchStoreBox).toBeEnabled();

  // 5) expect(locator).toBeChecked() // radio/checkbox is checked
  const maleRadioButton = page.locator('#gender-male');
  await expect(maleRadioButton).toBeChecked();

  const newsletterCheckbox = page.locator('#Newsletter');
  await expect(newsletterCheckbox).toBeChecked();

  // 6) expect(locator).toHaveAttribute() // element has attribute
  await expect(searchStoreBox).toHaveAttribute('placeholder', 'Search store');
});