import { useContext, useState } from 'react';
import Navbar from './NavBar';
import styles from './Header.module.css';
import BagIcon from '../assets/BagIcon';
import X from '../assets/X';
import { Link } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext';
import { CarritoContext } from '../context/CarritoContext';
import BarraBusqueda from "../components/BarraBusqueda";

const Header = () => {
  const { carrito } = useContext(CarritoContext);
  const { usuario, logout } = useAuthContext();
  const [menuAbierto, setMenuAbierto] = useState(false);

  const estaLogeado = !!usuario;
  const contadorEnCarrito = carrito.length;
  const esAdmin = usuario?.rol === 'admin';

  const toggleMenu = () => setMenuAbierto(!menuAbierto);
  const cerrarMenu = () => setMenuAbierto(false);

  return (
    <>
      <header className={`${styles.header} flex items-center justify-between`}>

        {/* LOGO */}
        <div className={styles.logo}>
          <Link to="/" className="text-dark text-decoration-none">
            Uroko Tienda
          </Link>
        </div>

        {/* NAVBAR DESKTOP (solo desktop) */}
        <div className="hidden md:flex">
          <Navbar />
        </div>
       <BarraBusqueda />
        {/* ICONOS */}
        <div className={`${styles.iconsContainer} flex items-center gap-6`}>

          {estaLogeado ? (
            <button onClick={logout} className={styles.login}>Cerrar Sesión</button>
          ) : (
            <Link to="/login" className="text-dark text-decoration-none">
              <button className={styles.login}>Ingresá</button>
            </Link>
          )}

          {/* CARRITO */}
          <div className={styles.iconoDeCarrito}>
            <Link to="/carrito">
              <BagIcon className={`${styles.icono} !text-black`} />
              {contadorEnCarrito > 0 && (
                <span className={styles.contadorDeCarrito}>{contadorEnCarrito}</span>
              )}
            </Link>
          </div>

          {/* BOTÓN HAMBURGUESA (solo mobile) */}
          <button
            className="md:hidden flex flex-col justify-between w-6 h-5"
            onClick={toggleMenu}
            aria-label="Abrir menú"
          >
            <span className="w-full bg-black h-0.5 rounded"></span>
            <span className="w-full bg-black h-0.5 rounded"></span>
            <span className="w-full bg-black h-0.5 rounded"></span>
          </button>
        </div>
      </header>

      {/* MENU MOBILE (solo mobile) */}
      <div
  className={`fixed top-0 left-0 w-72 h-screen bg-white z-[200] p-6
  transition-transform duration-300 ease-in-out md:hidden
  ${menuAbierto ? 'translate-x-0' : '-translate-x-full'}`}
>
        {/* Botón cerrar */}
        <button
          className="absolute top-6 right-6 text-black"
          onClick={cerrarMenu}
        >
          <X />
        </button>

        {/* Navbar móvil */}
        <div className="mt-20" onClick={cerrarMenu}>
          <Navbar />
        </div>

        {/* Sección usuario */}
        <div className="mt-12">
          {estaLogeado ? (
            <>
              {esAdmin ? (
                <Link
                  to="/admin"
                  className="text-black text-xl font-medium block mb-4"
                  onClick={cerrarMenu}
                >
                  Hola, {usuario.nombre}
                </Link>
              ) : (
                <span className="text-black text-xl font-medium block mb-4">
                  Hola, {usuario.nombre}
                </span>
              )}

              <button
                onClick={() => {
                  logout();
                  cerrarMenu();
                }}
                className="w-full bg-black text-white py-3 rounded-md font-semibold hover:bg-gray-800 transition"
              >
                Cerrar Sesión
              </button>
            </>
          ) : (
            <Link to="/login" onClick={cerrarMenu}>
              <button className="w-full bg-black text-white py-3 rounded-md font-semibold hover:bg-gray-800 transition">
                Ingresá
              </button>
            </Link>
          )}
        </div>
      </div>

      {/* OVERLAY */}
      {menuAbierto && (
        <div
          className="fixed inset-0 bg-black/40 z-[150]"
          onClick={cerrarMenu}
        />
      )}
    </>
  );
};

export default Header;