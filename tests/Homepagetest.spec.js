const{test, expect} =require('@playwright/test');

test('Home page',async ({page})=>{


    await page.goto('https://projence-dev.web.app/');

    const pageTitle= await page.title();
    console.log('page title is:',pageTitle);

    await expect(page).toHaveTitle('Projense');

    const pageURL= await page.url();
    console.log('Page URL is:',pageURL);

    await expect(page).toHaveURL('https://projence-dev.web.app/');

    await page.close();

})