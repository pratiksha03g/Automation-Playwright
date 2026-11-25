import { expect, test } from '../../../src/fixtures/baseFixture';

test.describe('Checkout', () => {
  test('opens the order form from the cart', async ({ cartPage, checkoutPage }) => {
    await cartPage.open();
    await checkoutPage.open();

    await expect(checkoutPage.modal).toBeVisible();
    await expect(checkoutPage.modal.locator('#name')).toBeVisible();
  });
});
