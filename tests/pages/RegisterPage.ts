import { Page } from '@playwright/test';

export class RegisterPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async navigate() {
    await this.page.goto('http://localhost:3000/register');
  }

  async register(firstName: string, lastName: string, email: string, nationality: string, phone: string, password: string) {
    await this.page.locator('[data-testid="register-firstname-input"]').fill(firstName);
    await this.page.locator('[data-testid="register-lastname-input"]').fill(lastName);
    await this.page.locator('[data-testid="register-email-input"]').fill(email);
    await this.page.locator('[data-testid="register-nationality-input"]').fill(nationality);
    await this.page.locator('[data-testid="register-phone-input"]').fill(phone);
    await this.page.locator('[data-testid="register-password-input"]').fill(password);
    await this.page.locator('[data-testid="register-submit-button"]').click();
  }

  async verifyRegistrationSuccess() {
    await this.page.waitForURL('http://localhost:3000/login');
  }
}