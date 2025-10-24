import { Link } from "react-router-dom";

const Nav = () => { 
    return (  
        <nav style={{ backgroundColor: "#ffffffff", color: "white", padding: "10px" }}>  
            <ul style={{ listStyle: "none", display: "flex", gap: "24px", padding: 0, margin: 0 }}>
                <li><Link to={'/'}>Inicio</Link> </li> 
                <li><Link to="/tecnologia">Tecnologia</Link></li> 
                <li><Link to="/moda">Moda</Link>
                </li>   
            </ul>  
        </nav>  
    );  
}

export default Nav; 