import { test as base } from '@playwright/test';
import { InventoryPage } from '../pages/InventoryPage';
import { LoginPage } from '../pages/LoginPage';

type Pages = {
  loginPage: LoginPage;
  inventoryPage: InventoryPage;
};

// Import `test` and `expect` from here, not from @playwright/test, to get the page objects as fixtures.
export const test = base.extend<Pages>({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
  inventoryPage: async ({ page }, use) => {
    await use(new InventoryPage(page));
  },
});

export { expect } from '@playwright/test';
