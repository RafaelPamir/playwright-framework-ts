import { expect, test } from '../src/fixtures';

test.describe('Inventory', () => {
  test.beforeEach(async ({ inventoryPage }) => {
    await inventoryPage.goto();
  });

  test('lists all six products @smoke', async ({ inventoryPage }) => {
    await expect(inventoryPage.items).toHaveCount(6);
  });

  test('adding a product updates the cart badge', async ({ inventoryPage }) => {
    await inventoryPage.addToCart('sauce-labs-backpack');
    await expect(inventoryPage.cartBadge).toHaveText('1');
  });

  test('sorts products by price from low to high', async ({ inventoryPage }) => {
    await inventoryPage.sortBy('lohi');
    const prices = await inventoryPage.prices();
    expect(prices).toEqual([...prices].sort((a, b) => a - b));
  });
});
