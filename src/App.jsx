import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import MenuNav from './components/MenuNav';
import Contacto from "./pages/Contacto";
import Tickets from "./pages/Tickets";
import Login from "./pages/Login";
import Registro from "./pages/Registro";
import './styles/main.scss';

const App = () => {
  const enlacesMenu = [
    { label: 'INICIO', path: '/' },
    { label: 'CONTACTO', path: '/contacto' },
    { label: 'TICKETS', path: '/tickets' },
    { label: 'ACCEDE A TU CUENTA', path: '/login' },
    { label: 'REGÍSTRATE', path: '/registro' },
  ];

  return (
    <Router>
      <div className="app-container">
        {/* CSS Grid layout principal incluye el Header */}
        <header className="app-header">
          <img 
            src="./src/assets/Logo-Cencosud.png" 
            alt="Logotipo oficial de Cencosud" 
            className="app-logo" //
          />
          <MenuNav links={enlacesMenu} />
        </header>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tickets" element={<Tickets />} />
          <Route path="/tickets/:id" element={<div>Detalle del Ticket</div>} />
          <Route path="/contacto" element={<Contacto />} />
          {/* Rutas extra para cumplir los enlaces del header */}
          <Route path="/login" element={<Login />} />
          <Route path="/registro" element={<Registro />} />
        </Routes>
        
        <footer className="app-footer">
          <p>&copy; 2026 Sistema de Tickets</p>
        </footer>
      </div>
    </Router>
  );
};

export default App;