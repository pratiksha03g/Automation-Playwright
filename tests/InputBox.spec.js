const {test,expect} =require('@playwright/test')

test('Handle Inputbox',async ({page})=>{

   // await page.goto('https://itera-qa.azurewebsites.net/home/automation');
    await page.goto('https://demo.nopcommerce.com/register');


    // Inputbox- firstname
    await expect(await page.locator("//input[@id='FirstName']")).toBeVisible();
    await expect(await page.locator("//input[@id='FirstName']")).toBeEmpty();
    await expect(await page.locator("//input[@id='FirstName']")).toBeEditable();
    await expect(await page.locator("//input[@id='FirstName']")).toBeEnabled();
    
    await page.locator("//input[@id='FirstName']").fill("John")
   //page.fill("//input[@id='name']",'John');


    await page.waitForTimeout(5000);  //pausing code
    


    // Date input
    // await page.getByLabel('Birth date').fill('2020-02-02');

    // Time input
    // await page.getByLabel('Appointment time').fill('13:15');

    // Local datetime input
    // await page.getByLabel('Local time').fill('2020-03-02T05:15');



})