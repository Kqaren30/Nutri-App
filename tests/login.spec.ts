import { test, expect } from '@playwright/test';

test('login exitoso', async ({ page }) => {
  await page.goto('http://localhost:3000/login');

  // Completa los campos de login con las credenciales proporcionadas
  await page.fill('input[name="email"]', 'test@nutriapp.com');
  await page.fill('input[name="password"]', 'nutriapp123');


  // Envía el formulario usando el texto del botón
  await page.getByRole('button', { name: 'Iniciar sesión' }).click();

  // Espera a que la navegación indique login exitoso (redirige a /dishes)
  await expect(page).toHaveURL('http://localhost:3000/dishes');
});
