import Navbar from './NavBar';
import styles from './Header.module.css';
import BagIcon from '../assets/BagIcon';
import { Link } from 'react-router-dom';

const Header = ({contadorEnCarrito = 5}) => {
  return (
    <header className={styles.header}>

      <div className={styles.logo}>
        TENJIKAI
      </div>

      <div className={styles.navbarContainer}>
        <Navbar />
      </div>

      <div className={styles.iconsContainer}>

        <div className={styles.iconoDeCarrito}>
          <Link to="/carrito">
          <BagIcon className={styles.icono} />

          {contadorEnCarrito > 0 && (
            <span className={styles.contadorDeCarrito}>
              {contadorEnCarrito}
            </span>
          )}
          </Link>
          
        </div>
      </div>
    </header>   
  );
};

export default Header;