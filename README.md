# E-Commerce con React JS

## Instrucciones de instalación y uso del proyecto

1. Clonar el repositorio

git clone https://github.com/MariamCabaleiroAran/Pre-Entrega-Cabaleiro-Aran-Mariam.git

Ingresar a la carpeta del proyecto:

cd Pre-Entrega-Cabaleiro-Aran-Mariam.git

2. Instalar dependencias: 

```bash
npm install
```

3. Iniciar el proyecto

```bash
npm run dev
```

El proyecto estará disponible en:
👉 http://localhost:5173

## Cómo usar el e-commerce

### Navegación principal: Desde el menú podés acceder a:

- **Productos**

- **Últimos días** Muestra los últimos 4 productos del listado.

- **Sugeridos** Muestra 4 productos aleatorios desde la API cada vez que se entra.

- **Carrito**

- **Login**

- **Gestión de Productos (solo administradores)**


## Catálogo de productos

### En la sección Productos se puede:

- `Ver el listado completo.`

- `Abrir los detalles de cada producto.`

- `Agregar productos al carrito.`


## Autenticación

### Login

- **/login** el usuario ingresa con: 
                                    - `Usuario` 
                                    - `Contraseña` 

```js 
const USUARIOS_FAKE = [
  { 
    id: 1, 
    usuario: 'admin', 
    contrasenia: '1234', 
    rol: 'admin',
    nombre: 'Admin'
  },
  { 
    id: 2, 
    usuario: 'maria', 
    contrasenia: '1234', 
    rol: 'usuario',
    nombre: 'Maria'
  }
];
```

- **Roles**
- `rol: 'admin'`: Permite acceder al panel /admin y ver las funciones de gestión.

- `rol: 'usuario'`: Permite iniciar sesión y acceder al carrito.

- **Si es válido muestra**

-`Botón Cerrar sesión` 
-`Si es admin → acceso a /admin` 
-`Si es usuario comun → acceso a /carrito` 

## Estructura del proyecto

```
src/
├── assets/
│   ├── BagIcon.jsx
│   ├── CirclePlus.jsx
│   ├── react.svg
│   ├── SquarePen.jsx
│   ├── TrashIcon.jsx
│   ├── UserIcon.jsx
│   └── X.jsx
│
├── components/
│   ├── BarraBusqueda.jsx
│   ├── Carrito.jsx
│   ├── Footer.jsx
│   ├── Footer.module.css
│   ├── FormProducto.jsx
│   ├── FormProducto.module.css
│   ├── Formulario.jsx
│   ├── GestionProducto.jsx
│   ├── GestionProducto.module.css
│   ├── Header.jsx
│   ├── Header.module.css
│   ├── NavBar.jsx
│   ├── Navbar.module.css
│   ├── productos.jsx
│   ├── Productos.module.css
│   ├── ResultadosBusqueda.jsx
│   └── RutaProtegida.jsx
│
├── context/
│   ├── AuthContext.jsx
│   ├── BusquedaContext.jsx
│   ├── CarritoContext.jsx
│   └── ProductosContext.jsx
│
├── pages/
│   ├── Admin.jsx
│   ├── detalleSugerido.jsx
│   ├── DetalleUltimosdias.jsx
│   ├── Login.jsx
│   ├── ProductoDetalle.jsx
│   ├── Productos.jsx
│   ├── sugeridos.jsx
│   └── ultimosdias.jsx
│
├── App.jsx
├── index.css
├── main.jsx
│
├── index.html
```

## Tecnologías utilizadas

- React

- React Router DOM

- Context API

- Tailwind CSS

- CSS Modules

- MockAPI

- Vercel

## Deploy

El proyecto está desplegado en Vercel: https://pre-entrega-cabaleiro-aran-mariam.vercel.app/ 
(Se recomienda copiar y pegar este enñace, no clickearlo directamente, ya que al hacerlo de este modo pedir permisos)

