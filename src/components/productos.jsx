import { Link } from 'react-router-dom';
import { useProductosContext } from "../context/ProductosContext";
import styles from './Productos.module.css';
import { useState } from 'react';

const Productos = () => {
  
  // Usamos los contextos 
  const { productos, cargando, error } = useProductosContext();

    // Logica de Paginacion 
  const productosPorPagina = 8; 
  const [paginaActual, setPaginaActual] = useState(1);
  
  if (cargando) return "Cargando productos...";
  if (error) return error;

  // Calcular el índice de los productos a mostrar en la página actual
  const indiceUltimoProducto = paginaActual * productosPorPagina;
  const indicePrimerProducto = indiceUltimoProducto - productosPorPagina;
  const productosActuales = productos.slice(indicePrimerProducto, indiceUltimoProducto);

  // Cambiar de pagina
  const totalPaginas = Math.ceil(productos.length / productosPorPagina);
  const cambiarPagina = (numeroPagina) => setPaginaActual(numeroPagina);

return (
  <div>
    <h2 className="font-bold text-3xl ml-8">Productos</h2>
    <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
      {productosActuales.map((producto) => (
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

  <Link
    to={`/ultimosdias/${producto.id}`}
    className="px-4 py-2 border border-gray-800 text-gray-800 rounded-lg 
             hover:bg-gray-800 hover:text-white transition-all duration-200
             active:scale-95 no-underline-important"
  >
        Ver producto
  </Link>
</div>
        </div>
        
      ))}
    </div>

 {/* Paginador */}
      <div className="flex justify-center gap-2 my-8">
        {Array.from({ length: totalPaginas }, (_, indice) => (
          <button
            key={indice + 1}
            className={`px-4 py-2 rounded ${
              paginaActual === indice + 1 
                ? "bg-black text-white" 
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
            onClick={() => cambiarPagina(indice + 1)}
          >
            {indice + 1}
          </button>
        ))}
      </div>

  </div>
)};

export default Productos;