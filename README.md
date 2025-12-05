Instrucciones de instalación y uso del proyecto

 1. Clonar el repositorio

git clone https://github.com/MariamCabaleiroAran/Pre-Entrega-Cabaleiro-Aran-Mariam.git

Ingresar a la carpeta del proyecto:

cd Pre-Entrega-Cabaleiro-Aran-Mariam.git

 2. Instalar dependencias: 

npm install

3. Variables de entorno (si corresponde)

Si tu proyecto NO usa .env, podés borrar esta sección.

Ejemplo:

Crear un archivo .env en la raíz del proyecto:

VITE_API_URL=https://68dc9d6d7cd1948060aace06.mockapi.io/productos

4. Iniciar el proyecto

npm run dev


El proyecto estará disponible en:
👉 http://localhost:5173

5. Cómo usar el e-commerce

📍 Navegación principal

Desde el menú podés acceder a:

-Productos

-Últimos días

-Sugeridos

-Carrito

-Login

-Gestión de Productos (solo administradores)

-En mobile, aparece como menú hamburguesa.

6. Catálogo de productos

En la sección Productos se puede:

-Ver el listado completo.

-Abrir los detalles de cada producto.

-Agregar productos al carrito 
(Sé que estos ultimos dos puntos seria mejor diseñarlos de otra manera, pero como otras cosas de este tipo, preferí obviarlas para entregar cuanto antes)

7. Sugeridos

Muestra 4 productos aleatorios desde la API cada vez que se entra.

8. Últimos días

Muestra los últimos 4 productos del listado.

9. Autenticación

✔️ Login

En /login, el usuario ingresa con:

Usuario y Contraseña

Si es válido:

-Se muestra "Hola, nombre"

-Botón Cerrar sesión

-Acceso al carrito

-Si es admin → acceso a /admin

🔑 Usuarios de prueba (para corrección)

👑 Administrador

Usuario: admin

Contraseña: 1234

(Permite acceder al panel /admin y ver las funciones de gestión.)

👤 Usuario común

Usuario: maria

Contraseña: 1234

(Permite iniciar sesión y acceder al carrito.)

10. Roles y protección de rutas

El proyecto usa Context API + RutaProtegida.

🔒 Usuarios NO logueados:

No pueden acceder a /carrito

No pueden acceder a /admin

Son redirigidos a /login

11. Administradores:

Acceso exclusivo a /admin

Vista especial para gestión 

12. Carrito de compras

Desde cualquier sección se puede:

Agregar productos al carrito.

Ver el contador en el header.

En /carrito se muestra:

Lista de productos

Total

Botón para eliminar items

Todo manejado mediante CarritoContext.

13. Tecnologías utilizadas

React

React Router DOM

Context API

Tailwind CSS

CSS Modules

MockAPI

Vercel

14. Deploy

El proyecto está desplegado en Vercel: https://pre-entrega-cabaleiro-aran-mariam.vercel.app/ 
(Se recomienda copiar y pegar este enñace, no clickearlo directamente, ya que al hacerlo de este modo pedir permisos)

--------------------------------------------------------------------------------------------------------------------------------------

En lineas generales prioricé el funcionamiento general y la pronta entrega por sobre algunas cuestiones de diseño especificas, aunque entiendo que algunas harían que la experiencia del usuario sea superadora.

