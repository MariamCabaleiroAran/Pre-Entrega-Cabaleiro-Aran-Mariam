import { NavLink } from "react-router-dom";
import styles from './Navbar.module.css'; 
import { useAuthContext } from '../context/AuthContext';

const Nav = () => { 
  const { usuario } = useAuthContext();
  const esAdmin = usuario === 'admin';

    return (  
        <nav style={{ backgroundColor: "#ffffffff", color: "white", padding: "10px" }}>  
            <ul style={{ listStyle: "none", display: "flex", gap: "24px", padding: 0, margin: 0 }}>
                <li><NavLink to={'/'}className={({ isActive }) => (isActive ? styles.active : styles.link)}>PRODUCTOS</NavLink> </li> 
                <li><NavLink to="/ultimosdias"className={({ isActive }) => (isActive ? styles.active : styles.link)}>ULTIMOS DIAS</NavLink></li> 
                <li><NavLink to="/sugeridos"className={({ isActive }) => (isActive ? styles.active : styles.link)}>SUGERIDOS</NavLink></li>
                 {esAdmin && (<li><NavLink to="/admin" className={styles.link}>Admin</NavLink></li>)}   
            </ul>  
        </nav>  
    );  
}

export default Nav; 