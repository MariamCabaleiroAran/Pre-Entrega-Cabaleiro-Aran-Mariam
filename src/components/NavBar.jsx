import { NavLink } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";

const Nav = () => {
  const { usuario } = useAuthContext();
  const esAdmin = usuario?.usuario === "admin";

  const linkClasses =
  "text-black !no-underline decoration-none md:text-lg text-2xl font-medium hover:text-gray-700 transition";

  return (
    <nav>
      <ul className="flex md:flex-row flex-col md:gap-10 gap-8">
        <li>
          <NavLink
            to="/"
            className={linkClasses}
          >
            PRODUCTOS
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/ultimosdias"
            className={linkClasses}
          >
            ÚLTIMOS DÍAS
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/sugeridos"
            className={linkClasses}
          >
            SUGERIDOS
          </NavLink>
        </li>

        {esAdmin && (
          <li>
            <NavLink
              to="/admin"
              className={linkClasses}
            >
              Admin
            </NavLink>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Nav;