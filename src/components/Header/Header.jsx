import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Instagram } from 'react-feather';
import logo from '../../assets/logo.png';

function Header() {
  return (
    <Navbar
      expand="lg"
      fixed="top"
      style={{
        background: 'rgba(255, 255, 255, 0.8)',
        backdropFilter: 'blur(10px)',
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
      }}
    >
      <Container>
        <Navbar.Brand href="#inicio" className="d-flex align-items-center">
          <img
            src={logo}
            alt="KittyScan Pet Shop"
            height="50"
            className="d-inline-block align-top me-2"
            style={{ borderRadius: '50%' }}
          />
          <span
            style={{
              fontWeight: 'bold',
              color: '#E86A92',
              fontSize: '1.3rem',
            }}
          >
            KittyScan
          </span>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbar-nav" />

        <Navbar.Collapse id="navbar-nav" className="justify-content-end">
          <Nav className="text-center">
            <Nav.Link href="#inicio">Inicio</Nav.Link>
            <Nav.Link href="#productos">Productos</Nav.Link>
            <Nav.Link href="#testimonios">Testimonios</Nav.Link>
            <Nav.Link href="#contacto">Contacto</Nav.Link>
            <Nav.Link
              href="https://www.instagram.com/kittyscan.petshop/"
              target="_blank"
              rel="noopener noreferrer"
              className="d-flex align-items-center justify-content-center gap-1"
              style={{ color: '#E86A92', fontWeight: 'bold' }}
            >
              <Instagram size={18} />
              Instagram
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
