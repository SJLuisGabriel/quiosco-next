# Quiosco de Alimentos

## Descripción del Proyecto

Este proyecto es un sistema de kiosco de alimentos que permite a los clientes realizar pedidos, a la cocina recibir y procesar esos pedidos, y a la ventanilla administrar las órdenes listas para su entrega. El proyecto utiliza Next.js, un framework de React, y Prisma como ORM para la gestión de la base de datos.

## Funcionalidades

- Ver categorías de alimentos.
- Ver productos dentro de cada categoría.
- Agregar productos al carrito.
- Modificar cantidad de productos en el carrito.
- Realizar pedido.
- Recibir pedidos en la cocina.
- Marcar pedidos como completados.
- Ver órdenes listas en la ventanilla.
- Marcar órdenes como entregadas.

## Historial de Cambios

### Versión 1.0.0 - 20 de Mayo, 2024

- **Creación del Proyecto**

  - Configuración inicial del proyecto con las rutas principales.
  - Conexión con la base de datos PostgreSQL alojada en Render.
  - Creación de los modelos de la base de datos.
  - Instalación de la dependencia `ts-node` con el comando **`npm i -D ts-node`**.
    **`npm i @prisma/client` `npm i -D prisma`**
  - Creación de archivos para la inserción de datos proporcionados en el curso.
  - Carga de información en la base de datos de Render con el comando **`npx prisma db seed`**.

- **Feature: Ver categorías de alimentos**
  - Consumo de la información en el proyecto.
  - Implementación de la funcionalidad que permite a los clientes ver las diferentes categorías de alimentos disponibles en el quiosco.
  - Implementación de una vista con íconos para una mejor visualización por parte de los clientes.
  - Desarrollo de las rutas necesarias para que los usuarios puedan navegar entre las diferentes categorías utilizando el menú de navegación.

### Versión 1.1.0 - 21 de Mayo, 2024

- **Feature: Ver productos dentro de cada categoría**
  - Implementación de la funcionalidad que permite a los clientes ver los productos disponibles dentro de una categoría seleccionada.
  - Diseño y formato del precio y estilo para los productos (incluyendo nombre y precio).
  - Adición y renderización de imágenes para mejorar la visualización por parte de los usuarios.
  - Incorporación de un botón de "Agregar al carrito" con estilo, sin funcionalidad activa.
  - Adición de un título que invita al usuario a seleccionar su pedido.
  - Aplicación de estilo al menú de navegación (Nav) para indicar la categoría que se está visualizando.

### Versión 1.2.0 - 22 de Mayo, 2024

- **Feature**: Agregar productos al carrito
  - Implementada la funcionalidad que permite a los clientes agregar productos seleccionados al carrito de compras.

### Versión 1.3.0 - 23 de Mayo, 2024

- **Feature**: Modificar cantidad de productos en el carrito
  - Implementada la funcionalidad que permite a los clientes modificar la cantidad de cada producto en el carrito.

### Versión 1.4.0 - 24 de Mayo, 2024

- **Feature**: Realizar pedido
  - Implementada la funcionalidad que permite a los clientes finalizar el pedido y enviarlo a la cocina.

### Versión 1.5.0 - 27 de Mayo, 2024

- **Feature**: Recibir pedidos
  - Implementada la funcionalidad que permite a la cocina recibir notificaciones de nuevos pedidos realizados por los clientes.

### Versión 1.6.0 - 28 de Mayo, 2024

- **Feature**: Marcar pedidos como completados
  - Implementada la funcionalidad que permite a la cocina marcar los pedidos como completados una vez que estén listos.

### Versión 1.7.0 - 29 de Mayo, 2024

- **Feature**: Ver órdenes listas
  - Implementada la funcionalidad que permite a la ventanilla ver las órdenes que están listas para ser recogidas.

### Versión 1.8.0 - 30 de Mayo, 2024

- **Feature**: Marcar órdenes como entregadas
  - Implementada la funcionalidad que permite a la ventanilla marcar las órdenes como entregadas a los clientes.

## Instalación

1. Clona este repositorio.
2. Instala las dependencias con `npm install`.
3. Configura la base de datos en el archivo `.env`.
4. Ejecuta la aplicación con `npm run dev`.
