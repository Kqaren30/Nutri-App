# Documentación de Selectores de Prueba para el Componente de Login, Registro y Lista de Platillos

Este archivo documenta los selectores de prueba (`data-testid`) añadidos a los componentes de login, registro y lista de platillos para facilitar las pruebas automatizadas con Playwright.

## Selectores del Componente de Login

- **`login-page`**: Contenedor principal de la página de login.
- **`login-container`**: Contenedor del formulario y elementos relacionados.
- **`login-header`**: Encabezado con el logo y título de la aplicación.
- **`login-logo`**: Icono del logo de la aplicación.
- **`login-title`**: Título principal "NutriApp".
- **`login-welcome`**: Mensaje de bienvenida.
- **`login-subtitle`**: Subtítulo que invita a iniciar sesión.
- **`login-form`**: Formulario de inicio de sesión.
- **`login-email-field`**: Contenedor del campo de entrada para el email.
- **`login-email-input`**: Campo de entrada para el email.
- **`login-password-field`**: Contenedor del campo de entrada para la contraseña.
- **`login-password-input`**: Campo de entrada para la contraseña.
- **`login-error-message`**: Mensaje de error mostrado en caso de credenciales incorrectas.
- **`login-submit-button`**: Botón para enviar el formulario.
- **`login-register-link`**: Enlace para redirigir a la página de registro.

## Selectores del Componente de Registro

- **`register-page`**: Contenedor principal de la página de registro.
- **`register-container`**: Contenedor del formulario y elementos relacionados.
- **`register-header`**: Encabezado con el logo y título de la aplicación.
- **`register-logo`**: Icono del logo de la aplicación.
- **`register-title`**: Título principal "NutriApp".
- **`register-welcome`**: Mensaje de bienvenida.
- **`register-subtitle`**: Subtítulo que invita a registrarse.
- **`register-form`**: Formulario de registro.
- **`register-fields`**: Contenedor de los campos del formulario.
- **`register-firstname-field`**: Contenedor del campo de entrada para el nombre.
- **`register-firstname-input`**: Campo de entrada para el nombre.
- **`register-lastname-field`**: Contenedor del campo de entrada para el apellido.
- **`register-lastname-input`**: Campo de entrada para el apellido.
- **`register-email-field`**: Contenedor del campo de entrada para el email.
- **`register-email-input`**: Campo de entrada para el email.
- **`register-nationality-field`**: Contenedor del campo de entrada para la nacionalidad.
- **`register-nationality-input`**: Campo de entrada para la nacionalidad.
- **`register-phone-field`**: Contenedor del campo de entrada para el celular.
- **`register-phone-input`**: Campo de entrada para el celular.
- **`register-password-field`**: Contenedor del campo de entrada para la contraseña.
- **`register-password-input`**: Campo de entrada para la contraseña.
- **`register-error-message`**: Mensaje de error mostrado en caso de problemas al registrar.
- **`register-submit-button`**: Botón para enviar el formulario.
- **`register-login-link`**: Enlace para redirigir a la página de inicio de sesión.

## Selectores del Componente de Lista de Platillos

- **`dishes-list`**: Contenedor principal de la lista de platillos.
- **`dish-card-{id}`**: Tarjeta individual de un platillo, donde `{id}` es el identificador único del platillo.
- **`dish-image-container`**: Contenedor de la imagen del platillo.
- **`dish-image`**: Imagen del platillo.
- **`dish-no-image`**: Contenedor mostrado cuando no hay imagen disponible para el platillo.
- **`dish-prep-time`**: Etiqueta que muestra el tiempo de preparación o indica si es un platillo rápido.
- **`dish-name`**: Nombre del platillo.
- **`dish-description`**: Descripción del platillo.
- **`dish-actions`**: Contenedor de las acciones disponibles para el platillo (ver, editar, eliminar).
- **`dish-view-link`**: Enlace para ver los detalles del platillo.
- **`dish-edit-link`**: Enlace para editar el platillo.
- **`dish-delete-button`**: Botón para eliminar el platillo.

## Selectores del Header de la Lista de Platillos

- **`dishes-header`**: Contenedor principal del header de la lista de platillos.
- **`dishes-header-title`**: Título del header de la lista de platillos.
- **`dishes-header-add-button`**: Botón para agregar un nuevo platillo desde el header.

## Selectores del Componente de Creación de Nuevo Platillo

- **`new-dish-form`**: Formulario principal para crear un nuevo platillo.
- **`new-dish-basic-info`**: Sección de información básica del platillo.
- **`new-dish-name-field`**: Contenedor del campo de entrada para el nombre del platillo.
- **`new-dish-name-input`**: Campo de entrada para el nombre del platillo.
- **`new-dish-description-field`**: Contenedor del campo de entrada para la descripción del platillo.
- **`new-dish-description-input`**: Campo de entrada para la descripción del platillo.
- **`new-dish-quickprep-field`**: Contenedor del campo de entrada para la opción de preparación rápida.
- **`new-dish-quickprep-input`**: Campo de entrada para la opción de preparación rápida.
- **`new-dish-details`**: Sección de detalles del platillo.
- **`new-dish-preptime-field`**: Contenedor del campo de entrada para el tiempo de preparación.
- **`new-dish-preptime-input`**: Campo de entrada para el tiempo de preparación.
- **`new-dish-cooktime-field`**: Contenedor del campo de entrada para el tiempo de cocción.
- **`new-dish-cooktime-input`**: Campo de entrada para el tiempo de cocción.
- **`new-dish-calories-field`**: Contenedor del campo de entrada para las calorías.
- **`new-dish-calories-input`**: Campo de entrada para las calorías.
- **`new-dish-imageurl-field`**: Contenedor del campo de entrada para la URL de la imagen.
- **`new-dish-imageurl-input`**: Campo de entrada para la URL de la imagen.
- **`new-dish-steps`**: Sección de pasos de preparación.
- **`new-dish-step-{idx}`**: Contenedor de un paso individual, donde `{idx}` es el índice del paso.
- **`new-dish-step-input`**: Campo de entrada para un paso individual.
- **`new-dish-step-remove-button`**: Botón para eliminar un paso individual.
- **`new-dish-add-step-button`**: Botón para agregar un nuevo paso.
- **`new-dish-submit`**: Contenedor del botón de envío del formulario.
- **`new-dish-error-message`**: Mensaje de error mostrado en caso de problemas al crear el platillo.
- **`new-dish-submit-button`**: Botón para enviar el formulario.

## Selectores del Componente de Edición de Platillo

- **`edit-dish-page`**: Contenedor principal de la página de edición de platillo.
- **`edit-dish-container`**: Contenedor principal del formulario y vista previa del platillo.
- **`edit-dish-preview`**: Contenedor de la vista previa del platillo.
- **`edit-dish-image`**: Imagen del platillo en la vista previa.
- **`edit-dish-no-image`**: Contenedor mostrado cuando no hay imagen disponible para el platillo.
- **`edit-dish-prep-time`**: Etiqueta que muestra el tiempo de preparación o indica si es un platillo rápido.
- **`edit-dish-name`**: Nombre del platillo en la vista previa.
- **`edit-dish-description`**: Descripción del platillo en la vista previa.
- **`edit-dish-form`**: Formulario principal para editar el platillo.
- **`edit-dish-form-title`**: Título del formulario de edición.
- **`edit-dish-fields`**: Contenedor de los campos del formulario.
- **`edit-dish-name-field`**: Contenedor del campo de entrada para el nombre del platillo.
- **`edit-dish-name-input`**: Campo de entrada para el nombre del platillo.
- **`edit-dish-calories-field`**: Contenedor del campo de entrada para las calorías.
- **`edit-dish-calories-input`**: Campo de entrada para las calorías.
- **`edit-dish-description-field`**: Contenedor del campo de entrada para la descripción del platillo.
- **`edit-dish-description-input`**: Campo de entrada para la descripción del platillo.
- **`edit-dish-preptime-field`**: Contenedor del campo de entrada para el tiempo de preparación.
- **`edit-dish-preptime-input`**: Campo de entrada para el tiempo de preparación.
- **`edit-dish-cooktime-field`**: Contenedor del campo de entrada para el tiempo de cocción.
- **`edit-dish-cooktime-input`**: Campo de entrada para el tiempo de cocción.
- **`edit-dish-quickprep-field`**: Contenedor del campo de entrada para la opción de preparación rápida.
- **`edit-dish-quickprep-input`**: Campo de entrada para la opción de preparación rápida.
- **`edit-dish-imageurl-field`**: Contenedor del campo de entrada para la URL de la imagen.
- **`edit-dish-imageurl-input`**: Campo de entrada para la URL de la imagen.
- **`edit-dish-steps`**: Sección de pasos de preparación.
- **`edit-dish-step-{idx}`**: Contenedor de un paso individual, donde `{idx}` es el índice del paso.
- **`edit-dish-step-input`**: Campo de entrada para un paso individual.
- **`edit-dish-step-remove-button`**: Botón para eliminar un paso individual.
- **`edit-dish-add-step-button`**: Botón para agregar un nuevo paso.
- **`edit-dish-error-message`**: Mensaje de error mostrado en caso de problemas al editar el platillo.
- **`edit-dish-submit-button`**: Botón para enviar el formulario.

# Selectores del Componente de Vista de Detalle de Platillo

Estos selectores corresponden al componente de detalle de platillo (ViewDishDetail) y permiten identificar de manera única los elementos clave para pruebas automatizadas.

- **`view-dish-detail-root`**: Contenedor principal de la vista de detalle del platillo.
- **`dish-detail-card`**: Tarjeta principal que agrupa la información y la imagen del platillo.
- **`dish-image-section`**: Sección que contiene la imagen y datos destacados del platillo.
- **`dish-image`**: Imagen del platillo (si está disponible).
- **`no-image`**: Contenedor mostrado cuando no hay imagen disponible para el platillo.
- **`dish-prep-time`**: Etiqueta que muestra el tiempo de preparación o indica si es un platillo rápido.
- **`dish-calories`**: Etiqueta que muestra las calorías del platillo (si aplica).
- **`dish-info-section`**: Sección que contiene el nombre, descripción y pasos del platillo.
- **`dish-name`**: Nombre del platillo.
- **`dish-description`**: Descripción del platillo.
- **`dish-steps`**: Contenedor de la sección de pasos de preparación.
- **`dish-steps-title`**: Título de la sección de pasos de preparación.
- **`dish-steps-list`**: Lista ordenada de los pasos de preparación.
- **`dish-step-{idx}`**: Elemento de la lista para cada paso individual, donde `{idx}` es el índice del paso.
- **`dish-step-dot-{idx}`**: Punto decorativo para cada paso individual.
- **`dish-step-text-{idx}`**: Texto del paso individual.
- **`dish-loading`**: Contenedor mostrado mientras se cargan los datos del platillo.

## Propósito

Estos selectores permiten identificar de manera única los elementos clave de los componentes de login, registro y lista de platillos, facilitando la escritura de pruebas automatizadas confiables y mantenibles.