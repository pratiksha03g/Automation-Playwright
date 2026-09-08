const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../Pages/LoginPage');
const { HomePage } = require('../Pages/HomePage');
const { ProductPage } = require('../Pages/ProductPage');
const { CartPage } = require('../Pages/CartPage');

test.describe('DemoBlaze POM flow', () => {
  test('user can login and open a product page', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const homePage = new HomePage(page);

    await loginPage.gotoLoginPage();
    await loginPage.login('pavanol', 'test@123');
    await expect(page.locator('#logout2')).toBeVisible();

    await homePage.selectCategory('Phones');
    await homePage.openProduct('Nexus 6');

    await expect(page).toHaveURL(/prod\.html\?idp_=3/);
  });

  test('user can add a product from product page and navigate to cart', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const homePage = new HomePage(page);
    const productPage = new ProductPage(page);
    const cartPage = new CartPage(page);

    await loginPage.gotoLoginPage();
    await loginPage.login('pavanol', 'test@123');
    await homePage.selectCategory('Phones');
    await homePage.openProduct('Samsung galaxy s6');

    const dialogMessage = await productPage.addProductToCart();
    expect(dialogMessage).toBe('Product added.');

    await cartPage.gotoCart();
    await expect(page).toHaveURL(/cart\.html/);
  });
});