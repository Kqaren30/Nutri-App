# Documentación de Pruebas de Dishes

A continuación se documentan las pruebas automatizadas existentes para el módulo de platillos (dishes) en el sistema.

---

## 1. Nombre de la prueba: Add a new dish
- **Descripción:** Verifica que un usuario autenticado pueda agregar un nuevo platillo correctamente.
- **Flujo que cubre:**
  1. Iniciar sesión.
  2. Navegar a la página de platillos.
  3. Completar el formulario para agregar un nuevo platillo.
  4. Enviar el formulario.
  5. Verificar que el platillo aparece en la lista y que los detalles son correctos.
- **Resultados esperados:**
  - El nuevo platillo se muestra en la lista y sus detalles son correctos.

---

## 2. Nombre de la prueba: Edit a dish
- **Descripción:** Verifica que un usuario pueda editar los datos de un platillo existente.
- **Flujo que cubre:**
  1. Iniciar sesión.
  2. Navegar a la página de platillos.
  3. Seleccionar un platillo y hacer clic en editar.
  4. Modificar los campos del platillo y guardar los cambios.
  5. Verificar que los cambios se reflejan en la lista y en los detalles del platillo.
- **Resultados esperados:**
  - El platillo editado muestra los nuevos datos tanto en la lista como en los detalles.

---

## 3. Nombre de la prueba: Delete a dish
- **Descripción:** Verifica que un usuario pueda eliminar un platillo de la lista.
- **Flujo que cubre:**
  1. Iniciar sesión.
  2. Navegar a la página de platillos.
  3. Eliminar un platillo de la lista.
  4. Verificar que el platillo ya no aparece en la lista.
- **Resultados esperados:**
  - El platillo eliminado ya no se muestra en la lista de platillos.
