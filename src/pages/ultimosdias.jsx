import { useState, useEffect, useContext } from "react";
import { CarritoContext } from "../context/CarritoContext";
import styles from "../components/Productos.module.css";

const UltimosDias = () => {
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);
  const { agregarAlCarrito } = useContext(CarritoContext);

  const URL = "https://fakestoreapi.com/products";

  useEffect(() => {
    fetch(URL)
      .then((respuesta) => respuesta.json())
      .then((datos) => {
        // Mostramos los últimos 4 productos del array
        const ultimos = datos.slice(-4);
        setProductos(ultimos);
      })
      .catch(() => setError("Error al cargar productos"))
      .finally(() => setCargando(false));
  }, []);

  if (cargando) return "Cargando productos...";
  if (error) return error;

  return (
    <div>
      <h2>ULTIMOS DIAS</h2>
      <div className={styles.grid}>
        {productos.map((producto) => (
          <div key={producto.id} className={styles.card}>
            <img
              src={producto.image}
              height={120}
              width={120}
              alt={producto.title}
            />
            <h3>{producto.title}</h3>
            <p>${producto.price}</p>
            <button onClick={() => agregarAlCarrito(producto)}>Agregar</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UltimosDias;