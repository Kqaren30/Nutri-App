import { test } from './fixtures/authentication';
import { RegisterPage } from './pages/RegisterPage';

// Constants for mock data
const MOCK_USER = {
  firstName: 'Jane',
  lastName: 'Doe',
  email: `janee.doe+${Math.floor(Math.random() * 100)}@example.com`,
  nationality: 'USA',
  phone: '1234567890',
  password: 'password123',
};

test.describe('Register Tests', () => {
  test.beforeEach(async ({ page }) => {
    // Navigate to the login page
    await page.goto('http://localhost:3000/login');
  });

  test('Register a new user', async ({ page, login }) => {
    const registerPage = new RegisterPage(page);

    // Navigate to register page and register a new user
    await registerPage.navigate();
    await registerPage.register(
      MOCK_USER.firstName,
      MOCK_USER.lastName,
      MOCK_USER.email,
      MOCK_USER.nationality,
      MOCK_USER.phone,
      MOCK_USER.password
    );

    // Validate successful registration by checking the page URL or a success message
    await page.waitForURL('http://localhost:3000/login');

    // Use the login fixture to log in with the newly registered user
    try {
      await login(MOCK_USER.email, MOCK_USER.password);
    } catch (error) {
      console.error('Login failed:', error);
      throw error;
    }
  });
});

test.describe('Register UI', () => {
  test('Register page UI elements are visible', async ({ page }) => {
    const registerPage = new RegisterPage(page);
    await registerPage.navigate();
    await registerPage.expectUIElementsVisible();
  }); });

  test.describe('Register Negative Cases', () => {
  test('Should show errors when required fields are empty', async ({ page }) => {
    const registerPage = new RegisterPage(page);
    await registerPage.navigate();
    await registerPage.submitWithEmptyFields();
    await registerPage.expectRequiredFieldErrorsVisible();
  });

  test('Should show error for invalid email format', async ({ page }) => {
    const registerPage = new RegisterPage(page);
    await registerPage.navigate();
    await registerPage.register(
      'Jane',
      'Doe',
      'invalid-email', // email inválido
      'USA',
      '1234567890',
      'password123'
    );
    await registerPage.expectInvalidEmailErrorVisible();
  });
   
    test('Should show error when email is already registered', async ({ page }) => {
      const registerPage = new RegisterPage(page);
      const email = 'test@nutriapp.com';
      await registerPage.navigate();
      await registerPage.register('Jane', 'Doe', email, 'USA', '1234567890', 'password123');
      await registerPage.expectDuplicateEmailErrorVisible();
    });
    
});
