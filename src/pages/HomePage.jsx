import '../styles/main.scss';
import logo from '../logo.png';
import TicketList from '../components/TicketList';
import Statistics from '../components/Statistics';

const HomePage = () => {
  const abiertos = [
    'Falla Login - 09:00', 'Error Pago Web - 10:30', 'Consulta Despacho - 11:15', 
    'Cambio contraseña - 12:00', 'Reclamo garantía - 13:45', 'Actualización App - 14:20',
    'Error envío - 15:00', 'Consulta stock - 15:45', 'Falla Checkout - 16:30',
    'Reclamo Facturación - 17:00', 'Error Logística - 17:30', 'Consulta membresía - 18:00'
  ];

  const criticos = [
    'Caída Servidor Santiago', 'Falla Pasarela Pago', 'Error Base Datos', 
    'Brecha Seguridad', 'Falla API Externa'
  ];

  return (
    <main className="dashboard-layout">
      <header className="main-header">
        <img src={logo} className="logo-container" alt="Logo Cencosud" />
        <nav className="nav-center">
          <a href="#">INICIO</a> <a href="#">CONTACTO</a> <a href="#">TICKETS</a>
        </nav>
        <div className="user-actions">
          <a href="#">ACCEDE A TU CUENTA</a> <a href="#">REGISTRATE</a>
        </div>
      </header>

      <section className="ticket-section">
        <TicketList titulo="TICKETS ABIERTOS" metrica="Total: 2,000 activos" items={abiertos} />
      </section>

      <aside style={{ display: 'flex', flexDirection: 'column', gap: '25px', height: '100%' }}>
        <section className="ticket-section">
          <TicketList titulo="TICKETS ESTADO CRITICO" metrica="Total: 5 urgentes" items={criticos} />
        </section>
        <section className="ticket-section">
          <Statistics />
        </section>
      </aside>
    </main>
  );
};
export default HomePage;