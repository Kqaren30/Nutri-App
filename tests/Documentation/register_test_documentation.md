# Documentación de Pruebas de Register

A continuación se documentan las pruebas automatizadas existentes para el módulo de registro de usuarios en el sistema.

---

## 1. Nombre de la prueba: Register a new user
- **Descripción:** Verifica que un usuario pueda registrarse correctamente con datos válidos y luego iniciar sesión con la nueva cuenta.
- **Flujo que cubre:**
  1. Navegar a la página de registro.
  2. Completar el formulario con datos válidos.
  3. Enviar el formulario de registro.
  4. Verificar el registro exitoso (redirección a login).
  5. Iniciar sesión con el nuevo usuario.
- **Resultados esperados:**
  - El usuario es registrado exitosamente y puede iniciar sesión con sus credenciales.

---

## 2. Nombre de la prueba: Register page UI elements are visible
- **Descripción:** Verifica que todos los elementos principales de la interfaz de registro estén visibles y correctamente presentados.
- **Flujo que cubre:**
  1. Navegar a la página de registro.
  2. Verificar la visibilidad de los campos, botones y textos principales.
- **Resultados esperados:**
  - Todos los componentes de la UI de registro son visibles y correctos.

---

## 3. Nombre de la prueba: Should show errors when required fields are empty
- **Descripción:** Verifica que el sistema muestre errores cuando se intenta registrar sin completar los campos obligatorios.
- **Flujo que cubre:**
  1. Navegar a la página de registro.
  2. Intentar enviar el formulario sin llenar los campos requeridos.
- **Resultados esperados:**
  - El sistema muestra mensajes de error indicando los campos obligatorios.

---

## 4. Nombre de la prueba: Should show error for invalid email format
- **Descripción:** Verifica que el sistema muestre un error si el email ingresado no tiene un formato válido.
- **Flujo que cubre:**
  1. Navegar a la página de registro.
  2. Completar el formulario con un email inválido y datos válidos en los demás campos.
  3. Enviar el formulario.
- **Resultados esperados:**
  - El sistema muestra un mensaje de error por formato de email inválido.

---

## 5. Nombre de la prueba: Should show error when email is already registered
- **Descripción:** Verifica que el sistema muestre un error si el email ingresado ya está registrado.
- **Flujo que cubre:**
  1. Navegar a la página de registro.
  2. Completar el formulario con un email ya registrado y datos válidos en los demás campos.
  3. Enviar el formulario.
- **Resultados esperados:**
  - El sistema muestra un mensaje de error indicando que el email ya está registrado.
