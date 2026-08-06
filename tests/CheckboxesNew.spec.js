const { test, expect}=require('@playwright/test')
test("Handle checkboxes", async({page})=>{

    await page.goto('https://qa-dashboard.azurewebsites.net/Identity/Account/Login?ReturnUrl=%2F');

  
    await page.locator("//input[@id='Input_RememberMe' and @type='checkbox']").check();
  

 

    await page.waitForTimeout(5000);
})