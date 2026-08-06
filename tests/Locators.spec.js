const{test, expect} =require('@playwright/test');

test('Home page',async ({page})=>{

    await page.goto('https://www.demoblaze.com/index.html');

    //click on login button-property
    await page.click('id=login2')


    //provide username-css
    await page.fill('#loginusername','pavanol')

    //provide password
    await page.fill("input[id='loginpassword']",'test@123')

    //click on login button- xpath
    await page.click("//button[normalize-space()='Log in']")

    //verify logout link presense-xpath
//const logoutlink= await page.locator("//a[id='logout2']")

const logoutlink= await page.locator("//a[normalize-space()='Log out']")

await expect(logoutlink).toBeVisible()

await page.close();



})