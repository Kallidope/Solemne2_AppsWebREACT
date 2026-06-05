import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Mensaje } from '../components/Mensaje';
import './Contacto.scss';

export const Contacto = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    asunto: '',
    mensaje: ''
  });
  const [showMessage, setShowMessage] = useState(false);
  const [messageType, setMessageType] = useState('exito');

  useEffect(() => {
    document.title = 'Contacto - Sistema de Tickets';
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.nombre && formData.email && formData.asunto && formData.mensaje) {
      setMessageType('exito');
      setShowMessage(true);
      setFormData({ nombre: '', email: '', asunto: '', mensaje: '' });
    } else {
      setMessageType('error');
      setShowMessage(true);
    }
  };

  return (
    <main className="contacto-page" role="main">
      <div className="container">
        <h1>Contacto</h1>
        
        <Mensaje
          tipo={messageType}
          texto={messageType === 'exito' ? 'Mensaje enviado correctamente' : 'Por favor completa todos los campos'}
          visible={showMessage}
          onDismiss={() => setShowMessage(false)}
        />

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="nombre">Nombre completo:</label>
            <input
              id="nombre"
              type="text"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              placeholder="Tu nombre"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              id="email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="tu@email.com"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="asunto">Asunto:</label>
            <input
              id="asunto"
              type="text"
              name="asunto"
              value={formData.asunto}
              onChange={handleChange}
              placeholder="Asunto de tu mensaje"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="mensaje">Mensaje:</label>
            <textarea
              id="mensaje"
              name="mensaje"
              value={formData.mensaje}
              onChange={handleChange}
              placeholder="Tu mensaje"
              rows="6"
              required
            ></textarea>
          </div>

          <button type="submit" className="btn-primario">
            Enviar Mensaje
          </button>
        </form>

        <Link to="/" className="back-link">← Volver a Inicio</Link>
      </div>
    </main>
  );
};

export default Contacto;
