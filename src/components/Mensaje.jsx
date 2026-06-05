import './Mensaje.scss';
import { useEffect } from 'react';

export const Mensaje = ({ tipo = 'exito', texto = '', visible = false, onDismiss = () => {} }) => {
  useEffect(() => {
    if (visible) {
      const timer = setTimeout(() => {
        onDismiss();
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [visible, onDismiss]);

  if (!visible) return null;

  return (
    <div 
      className={`mensaje mensaje--${tipo}`}
      role="alert"
      aria-live="polite"
    >
      <div className="mensaje__contenido">
        <span className="mensaje__icono">
          {tipo === 'exito' ? '✓' : '✕'}
        </span>
        <p className="mensaje__texto">{texto}</p>
      </div>
      <button
        className="mensaje__cerrar"
        onClick={onDismiss}
        aria-label="Cerrar mensaje"
        title="Cerrar mensaje"
      >
        ×
      </button>
    </div>
  );
};

export default Mensaje;
