const { test, expect } = require('@playwright/test');

test('Handle checkboxes', async ({ page }) => {
    await page.setContent(`
      <label>
        <input id="Input_RememberMe" type="checkbox">
        Remember me
      </label>
    `);

    const rememberMeCheckbox = page.locator("//input[@id='Input_RememberMe' and @type='checkbox']");
    await rememberMeCheckbox.check();

    await expect(rememberMeCheckbox).toBeChecked();
});