import { Link } from 'react-router-dom';
import './MenuNav.scss';

export const MenuNav = ({ links = [] }) => {
  const defaultLinks = [
    { label: 'INICIO', path: '/' },
    { label: 'CONTACTO', path: '/contacto' },
    { label: 'TICKETS', path: '/tickets' },
    { label: 'ACCEDEA TU CUENTA', path: '/login' },
    { label: 'REGISTRATE', path: '/registro' }
  ];

  const menuLinks = links.length > 0 ? links : defaultLinks;

  return (
    <nav className="menu-nav" role="navigation" aria-label="Navegación principal">
      <ul className="menu-nav__list">
        {menuLinks.map((link, index) => (
          <li key={index} className="menu-nav__item">
            <Link 
              to={link.path} 
              className="menu-nav__link"
              aria-current={window.location.pathname === link.path ? 'page' : undefined}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MenuNav;
