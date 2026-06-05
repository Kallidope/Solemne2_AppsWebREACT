import './Footer.scss';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__content">
          <div className="footer__section">
            <h3 className="footer__title">Sobre Nosotros</h3>
            <p className="footer__text">
              Sistema de gestión de tickets para reportar y dar seguimiento a incidencias.
            </p>
          </div>

          <div className="footer__section">
            <h3 className="footer__title">Enlaces Rápidos</h3>
            <ul className="footer__links">
              <li><a href="/">Inicio</a></li>
              <li><a href="/tickets">Tickets</a></li>
              <li><a href="/contacto">Contacto</a></li>
            </ul>
          </div>

          <div className="footer__section">
            <h3 className="footer__title">Contacto</h3>
            <p className="footer__text">
              Email: soporte@cencosud.com<br />
              Teléfono: +56 2 XXXX XXXX
            </p>
          </div>
        </div>

        <div className="footer__divider"></div>

        <div className="footer__bottom">
          <p>&copy; {currentYear} CENCOSUD. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
