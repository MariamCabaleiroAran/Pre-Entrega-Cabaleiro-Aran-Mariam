import Carrito from './components/Carrito.jsx';
import Header from './components/Header.jsx';
import Inicio from './pages/Productos.jsx';
import Ultimosdias from "./pages/ultimosdias.jsx";
import { Routes, Route } from 'react-router-dom'
import ProductoDetalle from './pages/ProductoDetalle.jsx';
import RutaProtegida from "./components/RutaProtegida";
import Admin from "./pages/Admin";
import DetalleSugerido from "./pages/detalleSugerido.jsx";
import DetalleUltimosdias from "./pages/DetalleUltimosdias.jsx";
import Footer from './components/Footer.jsx';
import Sugeridos from "./pages/sugeridos.jsx";
import Login from "./pages/Login";
import ResultadosBusqueda from "./components/ResultadosBusqueda";
import { Helmet } from "react-helmet-async";

function App() {

  return (
    <>
    <div className="grid min-h-dvh grid-rows-[auto_1fr_auto]">
      <Helmet>
        <title>Uroko Tienda</title>
        <meta name="description" content="Descubrí productos de bazar, artículos para el hogar y opciones destacadas en Uroko Tienda. Explorá nuestro catálogo y gestioná tus compras fácilmente." />
      </Helmet>
      <Header />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/Ultimosdias" element={<Ultimosdias />} />
        <Route path="/Sugeridos" element={<Sugeridos />} />
        <Route path="/login" element={<Login />} />
        <Route path="/busqueda" element={<ResultadosBusqueda />} />
        <Route path="/productos/:id" element={<ProductoDetalle />} />
        <Route path="/sugeridos/:id" element={<DetalleSugerido />} />
        <Route path="/ultimosdias/:id" element={<DetalleUltimosdias />} />
        <Route path="/carrito" element={<RutaProtegida> <Carrito /> </RutaProtegida>} />
        <Route path="/admin" element={<RutaProtegida> <Admin /> </RutaProtegida>} />
      </Routes>
      <Footer />
      </div>
    </>
  );
}

export default App;