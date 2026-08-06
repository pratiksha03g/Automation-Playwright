const {test, expect}= require('@playwright/test')

test("Handle checkboxes", async({page})=>{

    

    //single checkbox
    await page.locator("//input[@id='monday' and @type='checkbox']").check();
    //    await page.check("//input[@id='monday' and @type='checkbox']").check();

    expect(await page.locator("/input[@id='monday' and @type='checkbox']")).toBeChecked();
    expect(await page.locator("/input[@id='monday' and @type='checkbox']").isChecked()).toBeTruthy();


})