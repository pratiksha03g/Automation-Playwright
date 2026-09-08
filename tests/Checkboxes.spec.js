const { test, expect } = require('@playwright/test');

test('Handle checkboxes', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/');

    //single checkbox
    const mondayCheckbox = page.locator("//input[@id='monday' and @type='checkbox']");
    await mondayCheckbox.check();

    await expect(mondayCheckbox).toBeChecked();
    expect(await mondayCheckbox.isChecked()).toBeTruthy();
    await mondayCheckbox.uncheck();
    expect(await mondayCheckbox.isChecked()).toBeFalsy();

    //Multiple checkboxes
    const checkboxLocators=[
        "//input[@id='monday' and @type='checkbox']",
        "//input[@id='sunday' and @type='checkbox']",
        "//input[@id='saturday' and @type='checkbox']"
    ];

    // select multiple checkboxes
    for(const locator of checkboxLocators)
    {
        await page.locator(locator).check();
    }
    // unselect multiple checkboxes which are already selected
    for(const locator of checkboxLocators)
    {   if(await page.locator(locator).isChecked())
    {
            await page.locator(locator).uncheck();

    }
    }

});