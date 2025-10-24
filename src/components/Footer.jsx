import styles from './Footer.module.css';

const Footer = () => {
  
  const anioActual = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <p className={styles.copyright}>
        © {anioActual} E-Commerce con React. Todos los derechos reservados.
      </p>
    </footer>
  );
}

export default Footer;