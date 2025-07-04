import React, { useState } from 'react';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validaciones básicas
    if (!formData.name || !formData.email || !formData.message) {
      setStatus({ type: 'error', msg: 'Por favor completa todos los campos.' });
      return;
    }

    // Simulación de envío
    setStatus({ type: 'success', msg: 'Mensaje enviado, ¡gracias!' });
    setFormData({ name: '', email: '', message: '' });

    // Aquí podés integrar tu backend o servicio de envío real
  };

  return (
    <form onSubmit={handleSubmit} className="mx-auto" style={{ maxWidth: '600px' }}>
      {status && (
        <div
          className={`alert ${
            status.type === 'success' ? 'alert-success' : 'alert-danger'
          }`}
          role="alert"
        >
          {status.msg}
        </div>
      )}

      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Nombre
        </label>
        <input
          type="text"
          className="form-control"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Tu nombre"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Correo electrónico
        </label>
        <input
          type="email"
          className="form-control"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="tucorreo@ejemplo.com"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="message" className="form-label">
          Mensaje
        </label>
        <textarea
          className="form-control"
          id="message"
          name="message"
          rows="4"
          value={formData.message}
          onChange={handleChange}
          placeholder="Escribe tu mensaje aquí"
        ></textarea>
      </div>

      <button type="submit" className="btn btn-primary w-100">
        Enviar
      </button>
    </form>
  );
}

export default ContactForm;
