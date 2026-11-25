exports.HomePage = class HomePage {
    constructor(page) {
        this.page = page;
    }

    async gotoHomePage() {
        await this.page.goto('https://www.saucedemo.com/');
    }

    async addProductToCart(productName) {
        const product = await this.page.getByText(productName);
        await product.click();
        await this.page.getByText('Add to cart').click();
    }

    async gotoCart() {
        await this.page.getByText('Shopping cart').click();
    }
};