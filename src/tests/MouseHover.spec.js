const { test, expect } = require('@playwright/test');

test('Handle checkboxes', async ({ page }) => {

    await page.setContent('<input id="monday" type="checkbox" />');

    //single checkbox
    const mondayCheckbox = page.locator("//input[@id='monday' and @type='checkbox']");
    await mondayCheckbox.check();

    await expect(mondayCheckbox).toBeChecked();
    expect(await mondayCheckbox.isChecked()).toBeTruthy();

});