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
    async expectUIElementsVisible() {
      await this.page.locator('[data-testid="register-container"]').waitFor({ state: 'visible' });
      await this.page.locator('[data-testid="register-header"]').waitFor({ state: 'visible' });
      await this.page.locator('[data-testid="register-logo"]').waitFor({ state: 'visible' });
      await this.page.locator('[data-testid="register-title"]').waitFor({ state: 'visible' });
      await this.page.locator('[data-testid="register-welcome"]').waitFor({ state: 'visible' });
      await this.page.locator('[data-testid="register-subtitle"]').waitFor({ state: 'visible' });
      await this.page.locator('[data-testid="register-form"]').waitFor({ state: 'visible' });
      await this.page.locator('[data-testid="register-firstname-input"]').waitFor({ state: 'visible' });
      await this.page.locator('[data-testid="register-lastname-input"]').waitFor({ state: 'visible' });
      await this.page.locator('[data-testid="register-email-input"]').waitFor({ state: 'visible' });
      await this.page.locator('[data-testid="register-nationality-input"]').waitFor({ state: 'visible' });
      await this.page.locator('[data-testid="register-phone-input"]').waitFor({ state: 'visible' });
      await this.page.locator('[data-testid="register-password-input"]').waitFor({ state: 'visible' });
      await this.page.locator('[data-testid="register-submit-button"]').waitFor({ state: 'visible' });
      await this.page.locator('[data-testid="register-login-link"]').waitFor({ state: 'visible' });
    }
    async submitWithEmptyFields() {
      await this.page.locator('[data-testid="register-submit-button"]').click();
    }

    async expectRequiredFieldErrorsVisible() {
      // Verifica que los inputs requeridos estén marcados como inválidos por HTML5
      const firstNameInvalid = await this.page.locator('[data-testid="register-firstname-input"]').evaluate((el: HTMLInputElement) => el.validity.valueMissing);
      const lastNameInvalid = await this.page.locator('[data-testid="register-lastname-input"]').evaluate((el: HTMLInputElement) => el.validity.valueMissing);
      const emailInvalid = await this.page.locator('[data-testid="register-email-input"]').evaluate((el: HTMLInputElement) => el.validity.valueMissing);
      const nationalityInvalid = await this.page.locator('[data-testid="register-nationality-input"]').evaluate((el: HTMLInputElement) => el.validity.valueMissing);
      const phoneInvalid = await this.page.locator('[data-testid="register-phone-input"]').evaluate((el: HTMLInputElement) => el.validity.valueMissing);
      const passwordInvalid = await this.page.locator('[data-testid="register-password-input"]').evaluate((el: HTMLInputElement) => el.validity.valueMissing);
      if (!firstNameInvalid || !lastNameInvalid || !emailInvalid || !nationalityInvalid || !phoneInvalid || !passwordInvalid) {
        throw new Error('No todos los campos requeridos están marcados como inválidos por el navegador');
      }
    }

    async expectInvalidEmailErrorVisible() {
      // Devuelve true si el input de email es inválido según validación HTML5
      const isInvalid = await this.page.locator('[data-testid="register-email-input"]').evaluate((el: HTMLInputElement) => el.validity.typeMismatch);
      if (!isInvalid) {
        throw new Error('El campo email no está marcado como inválido por el navegador');
      }
    }
      async expectDuplicateEmailErrorVisible() {
        await this.page.locator('text=El email ya está registrado').waitFor({ state: 'visible' });
      }
}