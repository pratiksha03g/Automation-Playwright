class ProductPage {
  constructor(page) {
    this.page = page;
    this.addToCartButton = 'a:has-text("Add to cart")';
  }

  async addProductToCart() {
    const addButton = this.page.locator(this.addToCartButton).first();
    await addButton.waitFor({ state: 'visible' });

    const dialogPromise = this.page.waitForEvent('dialog');
    await addButton.click();
    const dialog = await dialogPromise;
    const message = dialog.message();
    await dialog.accept();
    await this.page.waitForTimeout(700);
    return message;
  }
}

module.exports = { ProductPage };
