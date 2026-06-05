import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Login.scss';

export const Login = () => {
  useEffect(() => {
    document.title = 'Iniciar Sesión - Sistema de Tickets';
  }, []);

  return (
    <main className="auth-page" role="main">
      <div className="auth-container">
        <h1>Iniciar Sesión</h1>
        <p>Página de login - A implementar en futuras versiones</p>
        <Link to="/" className="btn-primario">Volver a Inicio</Link>
      </div>
    </main>
  );
};

export default Login;
