import { expect, test } from '../../../src/fixtures/baseFixture';

test.describe('Products', () => {
  test('shows products on the catalog page', async ({ productsPage }) => {
    await productsPage.open();

    await expect(productsPage.productCards).not.toHaveCount(0);
    await expect(productsPage.productNames.first()).toBeVisible();
  });
});
