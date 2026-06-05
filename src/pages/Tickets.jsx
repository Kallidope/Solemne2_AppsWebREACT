import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Tickets.scss';

export const Tickets = () => {
  useEffect(() => {
    document.title = 'Tickets - Sistema de Tickets';
  }, []);

  return (
    <main className="tickets-page" role="main">
      <div className="container">
        <h1>Listado de Tickets</h1>
        <p>Esta página mostrará el listado completo de todos los tickets del sistema.</p>
        <p>Próximamente se implementarán filtros, búsqueda y opciones de ordenamiento.</p>
        <Link to="/" className="btn-primario">Volver a Inicio</Link>
      </div>
    </main>
  );
};

export default Tickets;
