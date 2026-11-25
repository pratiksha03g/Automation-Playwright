import { expect as baseExpect, test as base } from '@playwright/test';
import { APIClient } from '../api/APIClient';
import { loginData, loginDataRows } from '../data/loginData';
import { CartPage } from '../pages/CartPage';
import { CheckoutPage } from '../pages/CheckoutPage';
import { LoginPage } from '../pages/LoginPage';
import { ProductsPage } from '../pages/ProductsPage';

const testData = { login: loginData, loginRows: loginDataRows };

interface FrameworkFixtures {
  api: APIClient;
  cartPage: CartPage;
  checkoutPage: CheckoutPage;
  loginPage: LoginPage;
  productsPage: ProductsPage;
  testData: typeof testData;
}

export const test = base.extend<FrameworkFixtures>({
  api: async ({ request }, use) => {
    await use(new APIClient(request));
  },
  cartPage: async ({ page }, use) => {
    await use(new CartPage(page));
  },
  checkoutPage: async ({ page }, use) => {
    await use(new CheckoutPage(page));
  },
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
  productsPage: async ({ page }, use) => {
    await use(new ProductsPage(page));
  },
  testData: [testData, { option: true }],
});

export const expect = baseExpect;
