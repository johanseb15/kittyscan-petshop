import React from 'react';
import { Container, Nav, Navbar as BSNavbar, Button } from 'react-bootstrap';

function Navbar() {
  return (
    <BSNavbar
      expand="lg"
      sticky="top"
      className="shadow-sm"
      style={{
        background: 'rgba(255, 255, 255, 0.95)',
        backdropFilter: 'blur(10px)',
      }}
    >
      <Container>
        <BSNavbar.Brand
          href="#inicio"
          style={{
            fontWeight: 'bold',
            fontSize: '1.8rem',
            color: '#e91e63',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
          }}
        >
          🐾 KittyScan
        </BSNavbar.Brand>

        <BSNavbar.Toggle aria-controls="basic-navbar-nav" />
        <BSNavbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto d-flex align-items-center gap-4">
            <Nav.Link href="#inicio" className="text-dark fw-medium">
              Inicio
            </Nav.Link>
            <Nav.Link href="#productos" className="text-dark fw-medium">
              Productos
            </Nav.Link>
            <Nav.Link href="#servicios" className="text-dark fw-medium">
              Servicios
            </Nav.Link>
            <Nav.Link href="#contacto" className="text-dark fw-medium">
              Contacto
            </Nav.Link>

            <a
              href="#contacto"
              className="btn"
              style={{
                background: 'linear-gradient(135deg, #e91e63, #ff6b6b)',
                color: 'white',
                padding: '0.6rem 1.4rem',
                borderRadius: '25px',
                fontWeight: '600',
                transition: 'all 0.3s ease',
              }}
            >
              📞 Contactar
            </a>
          </Nav>
        </BSNavbar.Collapse>
      </Container>
    </BSNavbar>
  );
}

export default Navbar;
