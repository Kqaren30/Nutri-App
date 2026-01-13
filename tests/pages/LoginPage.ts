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
    await this.page.locator('[data-testid="dishes-header-title"]').isVisible();
  }

  async verifyLoginFailure() {
    await this.page.locator('[data-testid="login-error-message"]').isVisible();
  }

  async verifyLoginUIVisible() {
    await this.page.locator('[data-testid="login-container"]').isVisible();
    await this.page.locator('[data-testid="login-header"]').isVisible();
    await this.page.locator('[data-testid="login-logo"]').isVisible();
    await this.page.locator('[data-testid="login-title"]').isVisible();
    await this.page.locator('[data-testid="login-welcome"]').isVisible();
    await this.page.locator('[data-testid="login-subtitle"]').isVisible();
    await this.page.locator('[data-testid="login-form"]').isVisible();
    await this.page.locator('[data-testid="login-email-field"]').isVisible();
    await this.page.locator('[data-testid="login-email-input"]').isVisible();
    await this.page.locator('[data-testid="login-password-field"]').isVisible();
    await this.page.locator('[data-testid="login-password-input"]').isVisible();
    await this.page.locator('[data-testid="login-submit-button"]').isVisible();
    await this.page.locator('[data-testid="login-register-link"]').isVisible();
    // Verifica textos principales
    await this.page.locator('[data-testid="login-title"]', { hasText: 'NutriApp' }).isVisible();
    await this.page.locator('[data-testid="login-welcome"]', { hasText: 'Bienvenido' }).isVisible();
    await this.page.locator('[data-testid="login-subtitle"]', { hasText: 'Inicia sesión para continuar' }).isVisible();
    await this.page.locator('[data-testid="login-submit-button"]', { hasText: 'Iniciar sesión' }).isVisible();
  }

  // Métodos auxiliares al final
  async submitLoginForm() {
    await this.page.locator('[data-testid="login-submit-button"]').click();
  }

  async isEmailRequired() {
    return await this.page.locator('[data-testid="login-email-input"]').getAttribute('required') !== null;
  }

  async isPasswordRequired() {
    return await this.page.locator('[data-testid="login-password-input"]').getAttribute('required') !== null;
  }

   async isEmailInputInvalid() {
    // Devuelve true si el input de email es inválido según validación HTML5
    return await this.page.locator('[data-testid="login-email-input"]').evaluate((el: HTMLInputElement) => el.validity.typeMismatch);
  }
}