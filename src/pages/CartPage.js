class CartPage {
  constructor(page) {
    this.page = page;
    this.cartTable = '#tbodyid';
    this.deleteButtons = 'a[onclick*="deleteItem"]';
  }

  async checkProductInCart(productName) {
    const cartBody = this.page.locator(this.cartTable);
    return await cartBody.textContent().then((text) => text.includes(productName));
  }

  async gotoCart() {
    await this.page.locator('a[href="cart.html"]').click();
    await this.page.waitForURL(/cart\.html/);
  }

  async clearCart() {
    while (await this.page.locator(this.deleteButtons).count()) {
      const dialogPromise = this.page.waitForEvent('dialog');
      await this.page.locator(this.deleteButtons).first().click();
      const dialog = await dialogPromise;
      await dialog.accept();
      await this.page.waitForTimeout(500);
    }
  }
}

module.exports = { CartPage };
