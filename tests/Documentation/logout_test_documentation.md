# Documentación de Pruebas de Logout

A continuación se documenta la prueba automatizada existente para el módulo de Logout en el sistema.

---

## 1. Nombre de la prueba: Logout Functionality
- **Descripción:** Verifica que un usuario autenticado pueda cerrar sesión correctamente y sea redirigido a la página de login.
- **Flujo que cubre:**
  1. Iniciar sesión con un usuario válido (usando fixture de autenticación).
  2. Realizar la acción de logout.
  3. Verificar la redirección a la página de login.
- **Resultados esperados:**
  - El usuario es deslogueado correctamente.
  - El sistema redirige automáticamente a la página de login.
