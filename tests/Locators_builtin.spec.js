const{test,expect}= require('@playwright/test')

test('Built-inLocators',async({page})=>{

await page.goto('https://www.demoblaze.com/index.html')

const logo =await page.getByAltText('Product Store')
// await expect(logo).toBeVisisble();

// await page.getByPlaceholder

const title1 =  page.getByLabel('Laptops');
console.log('Header is',title1);

});