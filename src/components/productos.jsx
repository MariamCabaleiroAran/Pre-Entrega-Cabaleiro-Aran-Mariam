import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CarritoContext } from '../context/CarritoContext';
import { useProductosContext } from "../context/ProductosContext";
import styles from './Productos.module.css';

const Productos = () => {
  
  // Usamos los contextos 
  const { productos, cargando, error } = useProductosContext();
  const { agregarAlCarrito } = useContext(CarritoContext);

  if (cargando) return 'Cargando productos...';
  if (error) return error;

return (
  <div>
    <h2 className="font-bold text-3xl ml-8">Productos</h2>
    <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
      {productos.map((producto) => (
        <div key={producto.id} className={styles.card}>
          <img
            src={producto.imagen}
            height={120}
            width={120}
            alt={producto.nombre}
          />
          <h3 className="text-lg font-semibold text-gray-800 tracking-wide">
  {producto.nombre}
</h3>
          <p>${producto.precio}</p>
          <div className="flex gap-3 mt-3">
  <button
    onClick={() => agregarAlCarrito(producto)}
    className="px-4 py-2 border border-gray-800 text-gray-800 rounded-lg 
               hover:bg-gray-800 hover:text-white transition-all duration-200
               active:scale-95"
  >
    Agregar
  </button>

  <Link
    to={`/ultimosdias/${producto.id}`}
    className="px-4 py-2 border border-gray-800 text-gray-800 rounded-lg 
             hover:bg-gray-800 hover:text-white transition-all duration-200
             active:scale-95 no-underline-important"
  >
    Detalles
  </Link>
</div>
        </div>
      ))}
    </div>
  </div>
)};

export default Productos;