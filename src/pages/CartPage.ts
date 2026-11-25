import type { Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class CartPage extends BasePage {
  readonly cartRows: Locator;
  readonly placeOrderButton: Locator;

  constructor(page: ConstructorParameters<typeof BasePage>[0]) {
    super(page);
    this.cartRows = page.locator('#tbodyid tr');
    this.placeOrderButton = page.getByRole('button', { name: 'Place Order' });
  }

  async open(): Promise<void> {
    await this.goto('/cart.html');
  }
}
