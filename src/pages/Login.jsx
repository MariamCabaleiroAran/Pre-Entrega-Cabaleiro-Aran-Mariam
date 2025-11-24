import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext';

const Login = () => {
  const [usuario, setUsuario] = useState('');
  const [contrasenia, setContrasenia] = useState('');
  
  const { login } = useAuthContext();
  const navigate = useNavigate();
  
  const manejarSubmit = (evento) => {
    evento.preventDefault();
    if(usuario === 'admin' && contrasenia === '1234') {
      login(usuario);
      navigate('/admin');
    } else {
      alert('Usuario o Contraseña inválido');
    }
  }

  return (
    <div className="w-full flex justify-center mt-10">
      <form 
        onSubmit={manejarSubmit} 
        className="w-full max-w-sm flex flex-col gap-4 p-4 border rounded-lg shadow"
      >
        <h3 className="font-bold text-2xl text-center mb-2">
          Inicia sesión como Administrador
        </h3>

        <div className="flex flex-col">
          <label className="font-medium mb-1">Usuario</label>
          <input
            type="text"
            value={usuario}
            onChange={(e) => setUsuario(e.target.value)}
            className="border border-gray-400 rounded-lg px-3 py-2 focus:outline-none focus:border-gray-700"
          />
        </div>

        <div className="flex flex-col">
          <label className="font-medium mb-1">Contraseña</label>
          <input
            type="password"
            value={contrasenia}
            onChange={(e) => setContrasenia(e.target.value)}
            className="border border-gray-400 rounded-lg px-3 py-2 focus:outline-none focus:border-gray-700"
          />
        </div>

        <button
          type="submit"
          className="mt-2 px-5 py-2 border border-gray-800 text-gray-800 font-medium rounded-lg
                     hover:bg-gray-800 hover:text-white shadow-sm 
                     transition-all duration-200 active:scale-95"
        >
          Iniciar Sesion
        </button>
      </form>
    </div>
  );
}

export default Login;