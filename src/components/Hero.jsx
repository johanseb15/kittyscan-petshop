import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { Instagram, ShoppingBag } from 'react-feather';

function Hero() {
  return (
    <section
      id="inicio"
      className="position-relative overflow-hidden"
      style={{
        paddingTop: '180px',
        paddingBottom: '120px',
        background: 'linear-gradient(135deg, #FF9BB3 0%, #FFD6DE 100%)',
        color: '#3A3A3A',
      }}
    >
      {/* Floating paw prints background */}
      <div 
        className="position-absolute top-0 left-0 w-full h-full opacity-10"
        style={{
          backgroundImage: "url('data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'><text x='50%' y='50%' font-size='60' text-anchor='middle' dominant-baseline='middle'>🐾</text></svg>')",
          backgroundSize: '150px',
          animation: 'float 15s infinite linear',
        }}
      />
      
      <Container className="position-relative" style={{ zIndex: 2 }}>
        <h1
          className="fw-bold mb-4"
          style={{
            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
            lineHeight: '1.2',
            color: '#E86A92',
            textShadow: '2px 2px 4px rgba(255,255,255,0.5)',
          }}
        >
          Todo lo que necesita <br />
          tu <span style={{ color: '#FF6B8B' }}>mascobebé</span> 🐾
        </h1>
        
        <p 
          className="mb-5 mx-auto" 
          style={{
            fontSize: '1.25rem',
            maxWidth: '600px',
            color: '#5A5A5A',
          }}
        >
          Los productos más tiernos y de mejor calidad para consentir a tus peluditos en Córdoba
        </p>
        
        <div className="d-flex justify-content-center gap-3 flex-wrap">
          <Button
            href="#productos"
            className="d-flex align-items-center gap-2 fw-bold py-3 px-4 border-0"
            style={{
              borderRadius: '50px',
              background: 'linear-gradient(135deg, #E86A92, #FF6B8B)',
              fontSize: '1.1rem',
              boxShadow: '0 4px 15px rgba(232, 106, 146, 0.3)',
            }}
          >
            <ShoppingBag size={20} />
            Ver Productos
          </Button>
          
          <Button
            href="https://www.instagram.com/kittyscan.petshop/"
            target="_blank"
            variant="outline-dark"
            className="d-flex align-items-center gap-2 fw-bold py-3 px-4"
            style={{
              borderRadius: '50px',
              borderWidth: '2px',
              fontSize: '1.1rem',
              background: 'rgba(255,255,255,0.2)',
              backdropFilter: 'blur(5px)',
            }}
          >
            <Instagram size={20} />
            Seguinos
          </Button>
        </div>
      </Container>
    </section>
  );
}

export default Hero;