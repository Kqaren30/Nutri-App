import { Page } from '@playwright/test';

export class LogoutPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async logout() {
    // Ensure the logout button is visible and enabled before clicking
    const logoutButton = this.page.locator('button.bg-red-400.text-white');
    await logoutButton.waitFor({ state: 'visible' });
    await logoutButton.click();
  }

  async verifyLogoutSuccess() {
    await this.page.waitForURL('http://localhost:3000/login');
    await this.page.locator('[data-testid="login-welcome"]').isVisible();
  }

  async isLoggedIn(): Promise<boolean> {
    return this.page.locator('[data-testid="dishes-header-title"]').isVisible().catch(() => false);
  }
}