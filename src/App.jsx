import { useState } from "react";
import Carrito from './components/Carrito.jsx';
import Header from './components/Header.jsx';
import Inicio from './pages/Inicio.jsx';
import Moda from "./pages/Moda";
import { Routes, Route } from 'react-router-dom'
import ProductoDetalle from './pages/ProductoDetalle.jsx';
import Footer from './components/Footer.jsx';
import Tecnologia from "./pages/Tecnologia";

function App() {
  const [estaAutenticado, setEstaAutenticado] = useState(true);

  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/moda" element={<Moda />} />
        <Route path="/tecnologia" element={<Tecnologia />} />
        <Route path="/productos/:id" element={<ProductoDetalle />} />
        <Route path="/Carrito" element={<Carrito />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;