import { Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage';

export type SortOption = 'az' | 'za' | 'lohi' | 'hilo';

export class InventoryPage extends BasePage {
  readonly path = '/inventory.html';

  readonly title: Locator;
  readonly items: Locator;
  readonly itemNames: Locator;
  readonly itemPrices: Locator;
  readonly sortDropdown: Locator;
  readonly cartBadge: Locator;

  constructor(page: Page) {
    super(page);
    this.title = page.getByTestId('title');
    this.items = page.getByTestId('inventory-item');
    this.itemNames = page.getByTestId('inventory-item-name');
    this.itemPrices = page.getByTestId('inventory-item-price');
    this.sortDropdown = page.getByTestId('product-sort-container');
    this.cartBadge = page.getByTestId('shopping-cart-badge');
  }

  /** @param slug product id as used in the button's data-test, e.g. "sauce-labs-backpack" */
  async addToCart(slug: string): Promise<void> {
    await this.page.getByTestId(`add-to-cart-${slug}`).click();
  }

  async sortBy(option: SortOption): Promise<void> {
    await this.sortDropdown.selectOption(option);
  }

  async prices(): Promise<number[]> {
    const texts = await this.itemPrices.allTextContents();
    return texts.map((text) => Number(text.replace('$', '')));
  }
}
