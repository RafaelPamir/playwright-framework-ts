import { expect, test as setup } from '../src/fixtures';
import { AUTH_FILE } from '../src/utils/constants';
import { users } from '../src/utils/testData';

setup('authenticate as standard user', async ({ loginPage, page }) => {
  await loginPage.goto();
  await loginPage.login(users.standard.username, users.standard.password);
  await expect(page).toHaveURL(/inventory\.html/);
  await page.context().storageState({ path: AUTH_FILE });
});
