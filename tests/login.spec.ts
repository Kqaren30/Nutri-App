import { test, expect } from '@playwright/test';
import { LoginPage } from './pages/LoginPage';

// Constants for URLs and credentials
const VALID_EMAIL = 'pandarobles1@gmail.com';
const VALID_PASSWORD = '123qwE';
const INVALID_EMAIL = 'invalid@nutriapp.com';
const INVALID_PASSWORD = 'wrongpassword';

test.describe('Login Tests', () => {
  test('Login with valid credentials', async ({ page }) => {
    const loginPage = new LoginPage(page);

    // Navigate to login page
    await loginPage.navigate();

    // Perform login
    await loginPage.login(VALID_EMAIL, VALID_PASSWORD);

    // Verify successful login
    await loginPage.verifyLoginSuccess();
  });

  test('Login with invalid credentials', async ({ page }) => {
    const loginPage = new LoginPage(page);

    // Navigate to login page
    await loginPage.navigate();

    // Perform login with invalid credentials
    await loginPage.login(INVALID_EMAIL, INVALID_PASSWORD);

    // Verify login failure
    await loginPage.verifyLoginFailure();
  });

    test('Login UI is visually correct', async ({ page }) => {
      const loginPage = new LoginPage(page);

      // Navigate to login page
      await loginPage.navigate();

      // Verifica que todos los componentes y textos principales estén visibles
      await loginPage.verifyLoginUIVisible();
    });

    test('Login required fields validation', async ({ page }) => {
      const loginPage = new LoginPage(page);

      // Navega a la página de login
      await loginPage.navigate();

      // Intenta enviar el formulario sin llenar los campos
      await loginPage.submitLoginForm();

      // Verifica que los campos sean requeridos (HTML5 required attribute)
      expect(await loginPage.isEmailRequired()).toBeTruthy();
      expect(await loginPage.isPasswordRequired()).toBeTruthy();

      // Opcional: verifica que el usuario siga en la página de login
      await page.waitForURL('http://localhost:3000/login');
    });

    test('Login email format validation', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.navigate();

    // Ingresa un email inválido y un password válido
    await page.locator('[data-testid="login-email-input"]').fill('correo-invalido');
    await page.locator('[data-testid="login-password-input"]').fill('123qwE');

    // Intenta enviar el formulario
    await loginPage.submitLoginForm();

    // Verifica que el input de email sea inválido según HTML5
    expect(await loginPage.isEmailInputInvalid()).toBeTruthy();

    // Opcional: verifica que el usuario siga en la página de login
    await page.waitForURL('http://localhost:3000/login');
  });
});