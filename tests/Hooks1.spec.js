import { test, expect } from '@playwright/test';

let page;
test.beforeEach('HooksTest', async ({browser}) => {

await page.goto('https://www.demoblaze.com/index.html')  

//Login
await page.locator('#login2').click()
await page.locator('#loginusername').fill('pavanol')
await page.locator('#loginpassword').fill('test@123')
await page.locator('//button[normalize-space()="Log in"]').click()



});