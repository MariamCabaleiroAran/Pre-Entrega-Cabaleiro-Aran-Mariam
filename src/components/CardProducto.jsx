import styles from "./CardProducto.module.css";

const CardProducto = ({ producto, onAgregar }) => {
  return (
    <div className={styles.card}>
      <img
        src={producto.image}
        alt={producto.title}
        className={styles.imagen}
      />
      <div className={styles.info}>
        <h3 className={styles.titulo}>{producto.title}</h3>
        <p className={styles.precio}>${producto.price}</p>
        <button className={styles.boton} onClick={() => onAgregar(producto)}>
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};

export default CardProducto;