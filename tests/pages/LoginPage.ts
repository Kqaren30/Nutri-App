import { Page } from '@playwright/test';

export class LoginPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async navigate() {
    await this.page.goto('http://localhost:3000/login');
  }

  async login(email: string, password: string) {
    await this.page.locator('[data-testid="login-email-input"]').fill(email);
    await this.page.locator('[data-testid="login-password-input"]').fill(password);
    await this.page.locator('[data-testid="login-submit-button"]').click();
  }

  async verifyLoginSuccess() {
    await this.page.waitForURL('http://localhost:3000/dishes');
  }

  async verifyLoginFailure() {
    await this.page.locator('[data-testid="login-error-message"]').isVisible();
  }
}