/* eslint-disable react-hooks/rules-of-hooks */
import { test as base, Page } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { LogoutPage } from '../pages/LogoutPage';

// Define custom fixtures
type AuthFixtures = {
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
};

// Extend the base test with authentication fixtures
const test = base.extend<AuthFixtures>({
  login: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await use(async (email: string, password: string) => {
      await loginPage.navigate();
      await loginPage.login(email, password);
      await loginPage.verifyLoginSuccess();
    });
  },
  logout: async ({ page }, use) => {
    const logoutPage = new LogoutPage(page);
    await logoutPage.logout();
    await logoutPage.verifyLogoutSuccess();
    await use(async () => {});
  },
});

export { test };