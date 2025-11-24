import { useContext } from "react"; 
import { CarritoContext } from "../context/CarritoContext";

const Carrito = () => {
  const { carrito, eliminarDelCarrito } = useContext(CarritoContext);

  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 bg-white rounded-xl shadow-md">
      
      <h2 className="text-3xl font-semibold text-gray-800 mb-6">
        Carrito
      </h2>

      {carrito.length === 0 ? (
        <p className="text-gray-600">Tu carrito está vacío.</p>
      ) : (
        <div className="space-y-4">
          {carrito.map((producto, indice) => (
            <div 
              key={indice}
              className="flex items-center gap-4 border border-gray-200 p-4 rounded-lg shadow-sm"
            >
              <img 
                src={producto.imagen} 
                alt={producto.nombre} 
                className="w-20 h-20 object-contain rounded-md"
              />

              <div className="flex-1">
                <p className="text-lg font-medium text-gray-800">{producto.nombre}</p>
                <p className="text-gray-600">${producto.precio}</p>
              </div>

              <button
                onClick={() => eliminarDelCarrito(indice)}
                className="px-4 py-2 text-sm border border-red-600 text-red-600 rounded-lg 
                           hover:bg-red-600 hover:text-white transition-all duration-200 active:scale-95"
              >
                Eliminar
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Carrito;