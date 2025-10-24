import { useState, useEffect, useContext } from "react";
import { Link } from 'react-router-dom';
import { CarritoContext } from "../context/CarritoContext";
import styles from "../components/Productos.module.css";

const Sugeridos = () => {
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);
  const { agregarAlCarrito } = useContext(CarritoContext);

  const URL = "https://fakestoreapi.com/products";

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
      <h2>SUGERIDOS</h2>
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
            <Link to={`/sugeridos/${producto.id}`}>Detalles</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sugeridos;