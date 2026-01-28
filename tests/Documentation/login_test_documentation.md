# Documentación de Pruebas de Login

A continuación se documentan las pruebas automatizadas existentes para el módulo de Login en el sistema.

---

## 1. Nombre de la prueba: Login with valid credentials
- **Descripción:** Verifica que un usuario pueda iniciar sesión correctamente con credenciales válidas.
- **Flujo que cubre:**
  1. Navegar a la página de login.
  2. Ingresar email y contraseña válidos.
  3. Enviar el formulario de login.
- **Resultados esperados:**
  - El usuario inicia sesión exitosamente y se muestra la interfaz correspondiente al usuario autenticado.

---

## 2. Nombre de la prueba: Login with invalid credentials
- **Descripción:** Verifica que el sistema rechaza el inicio de sesión con credenciales incorrectas.
- **Flujo que cubre:**
  1. Navegar a la página de login.
  2. Ingresar email y/o contraseña inválidos.
  3. Enviar el formulario de login.
- **Resultados esperados:**
  - Se muestra un mensaje de error y el usuario permanece en la página de login.

---

## 3. Nombre de la prueba: Login UI is visually correct
- **Descripción:** Verifica que todos los elementos principales de la interfaz de login estén visibles y correctamente presentados.
- **Flujo que cubre:**
  1. Navegar a la página de login.
  2. Verificar la visibilidad de los campos de email, contraseña, botones y textos principales.
- **Resultados esperados:**
  - Todos los componentes de la UI de login son visibles y correctos.

---

## 4. Nombre de la prueba: Login required fields validation
- **Descripción:** Verifica que los campos de email y contraseña sean obligatorios.
- **Flujo que cubre:**
  1. Navegar a la página de login.
  2. Intentar enviar el formulario sin llenar los campos.
- **Resultados esperados:**
  - El sistema marca los campos como requeridos y no permite el envío del formulario.
  - El usuario permanece en la página de login.

---

## 5. Nombre de la prueba: Login email format validation
- **Descripción:** Verifica que el campo de email valide el formato correctamente.
- **Flujo que cubre:**
  1. Navegar a la página de login.
  2. Ingresar un email con formato inválido y una contraseña válida.
  3. Intentar enviar el formulario.
- **Resultados esperados:**
  - El sistema marca el campo de email como inválido y no permite el envío del formulario.
  - El usuario permanece en la página de login.
