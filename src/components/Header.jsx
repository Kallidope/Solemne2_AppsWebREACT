import './Header.scss';

export const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__content">
          <div className="header__logo">
            <h1 className="header__title">
              <span className="header__icon">🎫</span>
              CENCOSUD
            </h1>
          </div>
          <div className="header__subtitle">
            <p>Sistema de Gestión de Tickets</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
