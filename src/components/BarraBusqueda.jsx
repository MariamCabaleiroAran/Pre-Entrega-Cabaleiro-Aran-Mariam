import { useSearch } from "../context/BusquedaContext";
import { useNavigate } from "react-router-dom";

const BarraBusqueda = () => {
  const { busqueda, setBusqueda } = useSearch();
  const navigate = useNavigate();

  const manejarBusqueda = (e) => {
    const valor = e.target.value;
    setBusqueda(valor);

    if (valor.trim()) {
      navigate("/busqueda");
    }
  };

  const limpiarBusqueda = () => {
    setBusqueda("");
  };

  return (
    <form className="max-w-md mx-auto">
      <div className="relative">
        {/* LUPA A LA DERECHA */}
        <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
          <svg
            className="w-4 h-4 text-body"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeWidth="2"
              d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>

        {/* INPUT */}
        <input
          type="search"
          id="search"
          className="block w-full p-3 pr-10 pl-4 bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand shadow-xs placeholder:text-body"
          placeholder="Buscar Productos..."
          value={busqueda}
          onChange={manejarBusqueda}
        />

        {/* ❌ BOTÓN PARA LIMPIAR (solo aparece si hay texto) */}
        {busqueda && (
          <button
            type="button"
            onClick={limpiarBusqueda}
            className="absolute inset-y-0 right-10 flex items-center text-gray-500 hover:text-black"
          >
            ✕
          </button>
        )}
      </div>
    </form>
  );
};

export default BarraBusqueda;