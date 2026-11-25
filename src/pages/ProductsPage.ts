import type { Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class ProductsPage extends BasePage {
  readonly productCards: Locator;
  readonly productNames: Locator;

  constructor(page: ConstructorParameters<typeof BasePage>[0]) {
    super(page);
    this.productCards = page.locator('#tbodyid .card');
    this.productNames = page.locator('#tbodyid .card-title');
  }

  async open(): Promise<void> {
    await this.goto('/');
    await this.waitForVisible(this.productCards.first());
  }
}
