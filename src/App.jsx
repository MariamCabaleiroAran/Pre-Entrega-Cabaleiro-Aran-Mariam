import { useState } from "react";
import Carrito from './components/Carrito.jsx';
import Header from './components/Header.jsx';
import Inicio from './pages/Productos.jsx';
import Ultimosdias from "./pages/ultimosdias.jsx";
import { Routes, Route } from 'react-router-dom'
import ProductoDetalle from './pages/ProductoDetalle.jsx';
import DetalleSugerido from "./pages/detalleSugerido.jsx";
import DetalleUltimosdias from "./pages/DetalleUltimosdias.jsx";
import Footer from './components/Footer.jsx';
import Sugeridos from "./pages/sugeridos.jsx";

function App() {
  const [estaAutenticado] = useState(true);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/Ultimosdias" element={<Ultimosdias />} />
        <Route path="/Sugeridos" element={<Sugeridos />} />
        <Route path="/productos/:id" element={<ProductoDetalle />} />
        <Route path="/sugeridos/:id" element={<DetalleSugerido />} />
        <Route path="/ultimosdias/:id" element={<DetalleUltimosdias />} />
        <Route path="/Carrito" element={<Carrito />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;