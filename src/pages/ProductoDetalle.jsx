import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "../components/Productos.module.css";

const ProductoDetalle = () => {
  
  const { id } = useParams();
  const [producto, setProducto] = useState(null);

  useEffect(() => {
    fetch(`https://68dc9d6d7cd1948060aace06.mockapi.io/productos/${id}`)
      .then(respuesta => respuesta.json())
      .then(dato => setProducto(dato));
  },[id]);

  if(!producto)
    return <p>Cargando ......</p>
  
 return (
  <div className={styles.cardDetalle}>
    <h2 className="font-bold text-3xl">{producto.nombre}</h2>
    <img
      src={producto.imagen}
      alt={producto.nombre}
      width={120}
      height={120}
    />
    <p>{producto.descripcion}</p>
  </div>
);
}

export default ProductoDetalle;