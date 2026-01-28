import { test } from './fixtures/authentication';
import { LogoutPage } from './pages/LogoutPage';

// Constants for mock data
const MOCK_USER = {
  email: 'test@nutriapp.com',
  password: 'nutriapp123',
};

test.describe('Logout Tests', () => {
  test('Logout Functionality', async ({ page, login }) => {
    const logoutPage = new LogoutPage(page);

    // Use the login fixture to log in
    await login(MOCK_USER.email, MOCK_USER.password);

    // Perform logout
    await logoutPage.logout();

    // Verify redirection to the "Login" page
    await page.waitForURL('http://localhost:3000/login');
  });
});