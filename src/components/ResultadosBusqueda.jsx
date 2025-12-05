import { useSearch } from "../context/BusquedaContext";
import { useProductosContext } from "../context/ProductosContext";
import { CarritoContext } from "../context/CarritoContext";
import { Link } from "react-router-dom";
import { useContext } from "react";
import styles from "../components/Productos.module.css";

const Busqueda = () => {
  const { busqueda } = useSearch();
  const { productos } = useProductosContext();
  const { agregarAlCarrito } = useContext(CarritoContext);

  const productosFiltrados = productos.filter((producto) =>
    producto.nombre.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
      <h2 className="text-2xl font-bold tracking-tight text-gray-900">
        Resultados de búsqueda
      </h2>

      <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {productosFiltrados.length > 0 ? (
          productosFiltrados.map((producto) => (
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
                  hover:bg-gray-800 hover:text-white transition-all duration-200 active:scale-95"
                >
                  Agregar
                </button>

                <Link
                  to={`/productos/${producto.id}`}
                  className="px-4 py-2 border border-gray-800 text-gray-800 rounded-lg 
                  hover:bg-gray-800 hover:text-white transition-all duration-200
                  active:scale-95 no-underline-important"
                >
                  Detalles
                </Link>
              </div>
            </div>
          ))
        ) : (
          <p>No hay productos que coincidan con la búsqueda.</p>
        )}
      </div>
    </div>
  );
};

export default Busqueda;