const {test,expect} =require('@playwright/test')

test('Soft assertions',async ({page})=>{

    await page.goto("https://wwww.demoblaze.com/index.html")

    //hard assertions
    /*await expect(page).toHaveTitle('STORE'); //STORE123-negative test
    await expect(page).toHaveURL('https://wwww.demoblaze.com/index.html');
    await expect(page.locator('navbar-brand')).toBeVisible();
    */

    //Soft assertions
    await expect.soft(page).toHaveTitle('STORE123'); //STORE123-negative test
    await expect.soft(page).toHaveURL('https://wwww.demoblaze.com/index.html');
    // await expect.soft(page).toHaveURL(' https://projence-dev.web.app/');
   
    await expect.soft(page.locator('navbar-brand')).toBeVisible();




})