import { useState, useEffect, useContext } from "react";
import { Link } from 'react-router-dom';
import { CarritoContext } from "../context/CarritoContext";
import styles from "../components/Productos.module.css";

const Sugeridos = () => {
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);
  const { agregarAlCarrito } = useContext(CarritoContext);

  const URL = "https://68dc9d6d7cd1948060aace06.mockapi.io/productos";

  useEffect(() => {
    fetch(URL)
      .then((respuesta) => respuesta.json())
      .then((datos) => {
        const aleatorios = [...datos].sort(() => 0.5 - Math.random()).slice(0, 4);
        setProductos(aleatorios);
      })
      .catch(() => setError("Error al cargar productos sugeridos"))
      .finally(() => setCargando(false));
  }, []);

  if (cargando) return "Cargando productos sugeridos...";
  if (error) return error;

  return (
    <div>
      <h2 className="font-bold text-3xl ml-8">Sugeridos</h2>
      <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {productos.map((producto) => (
          <div key={producto.id} className={styles.card}>
            <img
              src={producto.imagen}
              height={120}
              width={120}
              alt={producto.nombre}
            />
            <h3 class="text-lg font-semibold text-gray-800 tracking-wide">
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
  );
};

export default Sugeridos;