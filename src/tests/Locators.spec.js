const { test, expect } = require('@playwright/test');
const {
    getDemoBlazeCredentials,
    hasDemoBlazeCredentials,
} = require('../testdata/credentials');

test('Home page', async ({ page }) => {
    test.skip(!hasDemoBlazeCredentials(), 'Set DemoBlaze credentials in .env to run this test.');
    const credentials = getDemoBlazeCredentials();

    await page.goto('/');

    //click on login button-property
    await page.click('id=login2')


    //provide username-css
    await page.fill('#loginusername', credentials.username)

    //provide password
    await page.fill("input[id='loginpassword']", credentials.password)

    //click on login button- xpath
    await page.click("//button[normalize-space()='Log in']")

    //verify logout link presense-xpath
//const logoutlink= await page.locator("//a[id='logout2']")

const logoutlink= await page.locator("//a[normalize-space()='Log out']")

await expect(logoutlink).toBeVisible()

await page.close();



})