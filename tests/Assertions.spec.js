const {test,expect} =require('@playwright/test')

test('AssertionsTest',async ({page})=>{

    //open app url
    await page.goto('https://demo.nopcommerce.com/register')

    //1] expect(page).toHaveURL() //page has URL
    await expect(page).toHaveURL('https://demo.nopcommerce.com/register')

    //2] expect(page).toHaveTitle()  Page has Title
    await expect(page).toHaveTitle('nopCommerce demo store. Register')

    //3) expect(locator).toBeVisible()    Element is visible
    const logoElement = await page.locator('.header-logo')
    await expect(logoElement).toBeVisible()

    //4) expect(locator).tobeEnabled()  Control is enabled
    const searchStoreBox = await page.locator('#small-searchterms')
    await expect(searchStoreBox).toBeEnabled() 

    //5) expect(locator).toBeChecked() Radio/checkbox is checked 

    //radio button
    const maleRadioButton=await page.locator('#gender-male')
    await maleRadioButton.click()
    await expect(maleRadioButton).toBeChecked()

    //checkbox
    const newsletterCheckbox= await page.locator('#Newsletter')
    await expect(newsletterCheckbox).toBeChecked()

    //6) expect(locator).toHaveAttribute() element has attribute
    



})