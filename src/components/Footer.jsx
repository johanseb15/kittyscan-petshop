import React from 'react';

function Footer() {
  return (
    <footer
      style={{
        backgroundColor: '#222',
        color: 'white',
        padding: '2rem 0',
        textAlign: 'center',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem',
          padding: '0 1rem',
        }}
      >
        <div>
          <p style={{ margin: 0 }}>&copy; 2024 KittyScan Petshop. Todos los derechos reservados.</p>
        </div>
        <div style={{ display: 'flex', gap: '1rem', fontSize: '1.5rem' }}>
          <a
            href="https://www.instagram.com/kittyscan.petshop/"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
            style={{ color: 'white', textDecoration: 'none' }}
          >
            📷
          </a>
          <a
            href="https://wa.me/5491167414943"
            target="_blank"
            rel="noreferrer"
            aria-label="WhatsApp"
            style={{ color: 'white', textDecoration: 'none' }}
          >
            💬
          </a>
          <a
            href="#"
            target="_blank"
            rel="noreferrer"
            aria-label="Facebook"
            style={{ color: 'white', textDecoration: 'none' }}
          >
            📘
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
