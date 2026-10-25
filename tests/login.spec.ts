import { expect, test } from '../src/fixtures';
import { users } from '../src/utils/testData';

// Login tests must start logged out, so drop the saved session.
test.use({ storageState: { cookies: [], origins: [] } });

test.describe('Login', () => {
  test.beforeEach(async ({ loginPage }) => {
    await loginPage.goto();
  });

  test('standard user can log in @smoke', async ({ loginPage, inventoryPage, page }) => {
    await loginPage.login(users.standard.username, users.standard.password);
    await expect(page).toHaveURL(/inventory\.html/);
    await expect(inventoryPage.title).toHaveText('Products');
  });

  test('locked out user sees an error', async ({ loginPage }) => {
    await loginPage.login(users.lockedOut.username, users.lockedOut.password);
    await expect(loginPage.errorMessage).toContainText('locked out');
  });

  test('wrong password shows an error', async ({ loginPage }) => {
    await loginPage.login(users.standard.username, 'wrong_password');
    await expect(loginPage.errorMessage).toContainText('do not match');
  });

  test('empty username shows a required-field error', async ({ loginPage }) => {
    await loginPage.login('', users.standard.password);
    await expect(loginPage.errorMessage).toContainText('Username is required');
  });
});
