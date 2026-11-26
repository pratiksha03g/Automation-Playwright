const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const { HomePage } = require('../pages/HomePage');
const { ProductPage } = require('../pages/ProductPage');
const { CartPage } = require('../pages/CartPage');
const {
  getDemoBlazeCredentials,
  hasDemoBlazeCredentials,
} = require('../testdata/credentials');

test.describe('DemoBlaze POM flow', () => {
  test('user can login and open a product page', async ({ page }) => {
    test.skip(!hasDemoBlazeCredentials(), 'Set DemoBlaze credentials in .env to run this test.');
    const credentials = getDemoBlazeCredentials();
    const loginPage = new LoginPage(page);
    const homePage = new HomePage(page);

    await loginPage.gotoLoginPage();
    await loginPage.login(credentials.username, credentials.password);
    await expect(page.locator('#logout2')).toBeVisible();

    await homePage.selectCategory('Phones');
    await homePage.openProduct('Nexus 6');

    await expect(page).toHaveURL(/prod\.html\?idp_=3/);
  });

  test('user can add a product from product page and navigate to cart', async ({ page }) => {
    test.skip(!hasDemoBlazeCredentials(), 'Set DemoBlaze credentials in .env to run this test.');
    const credentials = getDemoBlazeCredentials();
    const loginPage = new LoginPage(page);
    const homePage = new HomePage(page);
    const productPage = new ProductPage(page);
    const cartPage = new CartPage(page);

    await loginPage.gotoLoginPage();
    await loginPage.login(credentials.username, credentials.password);
    await homePage.selectCategory('Phones');
    await homePage.openProduct('Samsung galaxy s6');

    const dialogMessage = await productPage.addProductToCart();
    expect(dialogMessage).toBe('Product added.');

    await cartPage.gotoCart();
    await expect(page).toHaveURL(/cart\.html/);
  });
});