import './TicketCard.scss';

export const TicketCard = ({ nombre, codigo, estado, cantidad, imagen = '🎫' }) => {
  const estadoClass = estado.toLowerCase().replace(' ', '-');

  return (
    <div className="ticket-card" role="article">
      <div className="ticket-card__header">
        <span className="ticket-card__icon" aria-hidden="true">{imagen}</span>
        <span className={`ticket-card__estado ticket-card__estado--${estadoClass}`}>
          {estado}
        </span>
      </div>
      
      <div className="ticket-card__content">
        <h3 className="ticket-card__nombre">{nombre}</h3>
        <p className="ticket-card__codigo">Código: {codigo}</p>
        
        <div className="ticket-card__footer">
          <span className="ticket-card__cantidad">
            <strong>{cantidad}</strong> eventos
          </span>
        </div>
      </div>
    </div>
  );
};

export default TicketCard;
