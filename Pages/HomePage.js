class HomePage {
  constructor(page) {
    this.page = page;
    this.cartLink = 'a[href="cart.html"]';
    this.categoryLink = "a[onclick*=\"byCat('phone')\"]";
    this.productTitle = '.hrefch';
  }

  async gotoHomePage() {
    await this.page.goto('https://www.demoblaze.com/index.html');
  }

  async selectCategory(categoryName) {
    await this.page.locator('a').filter({ hasText: categoryName }).first().click();
    await this.page.waitForTimeout(1000);
  }

  async openProduct(productName) {
    const productLink = this.page.locator(this.productTitle).filter({ hasText: productName }).first();
    await productLink.click();
    await this.page.waitForURL(/prod\.html/);
  }

  async gotoCart() {
    await this.page.locator(this.cartLink).click();
  }
}

module.exports = { HomePage };
