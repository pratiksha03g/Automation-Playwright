import type { Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage';

export interface CheckoutDetails {
  name: string;
  country: string;
  city: string;
  card: string;
  month: string;
  year: string;
}

export class CheckoutPage extends BasePage {
  readonly modal: Locator;

  constructor(page: Page) {
    super(page);
    this.modal = page.locator('#orderModal');
  }

  async open(): Promise<void> {
    await this.page.getByRole('button', { name: 'Place Order' }).click();
    await this.waitForVisible(this.modal);
  }

  async submitOrder(details: CheckoutDetails): Promise<void> {
    await this.modal.locator('#name').fill(details.name);
    await this.modal.locator('#country').fill(details.country);
    await this.modal.locator('#city').fill(details.city);
    await this.modal.locator('#card').fill(details.card);
    await this.modal.locator('#month').fill(details.month);
    await this.modal.locator('#year').fill(details.year);
    await this.modal.getByRole('button', { name: 'Purchase' }).click();
  }
}
