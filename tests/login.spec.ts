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
});