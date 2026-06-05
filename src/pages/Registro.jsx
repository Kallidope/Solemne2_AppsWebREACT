import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Registro.scss';

export const Registro = () => {
  useEffect(() => {
    document.title = 'Registrarse - Sistema de Tickets';
  }, []);

  return (
    <main className="auth-page" role="main">
      <div className="auth-container">
        <h1>Crear Cuenta</h1>
        <p>Página de registro - A implementar en futuras versiones</p>
        <Link to="/" className="btn-primario">Volver a Inicio</Link>
      </div>
    </main>
  );
};

export default Registro;
