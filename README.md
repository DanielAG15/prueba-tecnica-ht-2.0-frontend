# Frontend - Prueba Tecnica HT FrontEnd

Este proyecto es el frontend de una aplicación de e-commerce que permite a los usuarios explorar una lista de productos, añadirlos al carrito, y finalizar la compra. Está desarrollado utilizando **React**, **React Router**, y **Material UI** para la interfaz gráfica.

---

## Tabla de Contenidos
- [Características](#características)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Instalación y Configuración](#instalación-y-configuración)
- [Componentes Principales](#componentes-principales)
- [Servicios](#servicios)
- [Temas Personalizados](#temas-personalizados)
- [Ejecución](#ejecución)

---

## Características

- Visualización de una lista de productos.
- Gestión de un carrito de compras (agregar, eliminar, limpiar).
- Interfaz gráfica moderna usando **Material UI**.
- Navegación entre rutas para la página principal y la página de confirmación.
- Comunicación con un backend para obtener productos y gestionar el carrito.

---

## Estructura del Proyecto

La estructura del proyecto es la siguiente:

```
frontend/
├── public/
├── src/
│   ├── components/
│   │   ├── Navbar.js
│   │   ├── ProductList.js
│   │   └── CartModal.js
│   ├── pages/
│   │   └── ConfirmationPage.js
│   ├── services/
│   │   ├── cartService.js
│   │   └── productService.js
│   ├── theme.js
│   ├── App.js
│   └── index.js
└── package.json
```

---

## Instalación y Configuración

### Pre-requisitos
- Node.js v16+ y npm instalados.

### Instalación

1. Clona el repositorio:
   ```bash
   git clone https://github.com/DanielAG15/prueba-tecnica-ht-2.0-frontend
   cd main
   ```

2. Instala las dependencias:
   ```bash
   npm install
   ```


---

## Componentes Principales

### 1. **Navbar**
- Muestra el logo y un icono de carrito con el conteo de productos.
- Propiedades:
  - `cartCount`: Número total de productos en el carrito.
  - `toggleCartModal`: Abre o cierra el modal del carrito.

### 2. **ProductList**
- Renderiza una lista de productos obtenidos desde la API.
- Propiedades:
  - `products`: Lista de productos a mostrar.
  - `addToCart`: Función para añadir productos al carrito.

### 3. **CartModal**
- Modal para visualizar y gestionar el carrito de compras.
- Propiedades:
  - `open`: Estado del modal (abierto/cerrado).
  - `onClose`: Función para cerrar el modal.
  - `cart`: Lista de productos en el carrito.
  - `removeFromCart`: Eliminar un producto del carrito.
  - `finalizePurchase`: Finaliza la compra.

### 4. **ConfirmationPage**
- Página que muestra un mensaje de confirmación tras finalizar la compra.

---

## Servicios

### 1. **productService.js**
- `fetchProducts`: Obtiene la lista de productos desde la API.

### 2. **cartService.js**
- `fetchCart`: Obtiene los productos del carrito.
- `addToCart`: Añade productos al carrito.
- `removeFromCart`: Elimina un producto del carrito.
- `clearCart`: Limpia todos los productos del carrito.

---

## Temas Personalizados

El archivo `theme.js` define el tema de Material UI utilizado en toda la aplicación, incluyendo colores, tipografía, y estilos globales.

---

## Ejecución

1. Inicia el servidor de desarrollo:
   ```bash
   npm start
   ```

2. Abre en el navegador:
   ```
http://localhost:3000
   ```

---

