const base = require('@playwright/test');
const { LoginPage } = require('../Pages/LoginPage');
const { HomePage } = require('../Pages/HomePage');
const { ProductPage } = require('../Pages/ProductPage');
const { CartPage } = require('../Pages/CartPage');

const test = base.test.extend({
  loginPage: async ({ page }, use) => use(new LoginPage(page)),
  homePage: async ({ page }, use) => use(new HomePage(page)),
  productPage: async ({ page }, use) => use(new ProductPage(page)),
  cartPage: async ({ page }, use) => use(new CartPage(page)),
});

module.exports = { test, expect: base.expect };