const { test, expect } = require('@playwright/test');

test('LocateMultipleElements', async ({ page }) => {

    await page.goto('https://www.demoblaze.com/index.html');

    /*const links = await page.$$('a');

    for(const link of links){
        const linktext = await link.textContent();
        console.log(linktext);

    }*/


    //locate all the products displayed on homepage
    const productLinks = page.locator("//div[@id='tbodyid']//h4/a");
    await expect(productLinks.first()).toBeVisible();

    const products = await productLinks.all();

    for(const product of products)
    {
        const prodName = await product.textContent();
        console.log(prodName);

    }

    });