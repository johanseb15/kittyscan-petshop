import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { Instagram, ShoppingBag } from 'react-feather';

function Hero() {
  return (
    <section id="inicio" className="hero-section">
      <div className="hero-paws-bg" />

      <Container className="position-relative" style={{ zIndex: 2 }}>
        <h1 className="hero-title mb-4">
          Todo lo que necesita <br />
          tu <span style={{ color: '#FF6B8B' }}>mascobebé</span> 🐾
        </h1>

        <p className="hero-subtitle">
          Los productos más tiernos y de mejor calidad para consentir a tus peluditos en Córdoba
        </p>

        <div className="d-flex justify-content-center gap-3 flex-wrap">
          <Button
            href="#productos"
            className="hero-btn-main d-flex align-items-center gap-2"
          >
            <ShoppingBag size={20} />
            Ver Productos
          </Button>

          <Button
            href="https://www.instagram.com/kittyscan.petshop/"
            target="_blank"
            className="hero-btn-outline d-flex align-items-center gap-2"
            variant="outline-dark"
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
