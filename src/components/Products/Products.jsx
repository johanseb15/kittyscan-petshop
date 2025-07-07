import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import productos from './data/productosData';

function Products() {
  return (
    <section id="productos" className="py-5" style={{ backgroundColor: '#FFF0F5' }}>
      <Container>
        <h2 className="text-center mb-5" style={{ fontFamily: 'Quicksand', color: '#E86A92' }}>
          Productos Destacados
        </h2>
        <Row>
          {productos.map((item, index) => (
            <Col md={4} className="mb-4" key={index}>
              <Card className="h-100 shadow-sm border-0 rounded-4">
                <Card.Img
                  variant="top"
                  src={item.imagen}
                  style={{ borderTopLeftRadius: '1rem', borderTopRightRadius: '1rem', objectFit: 'cover', height: '240px' }}
                />
                <Card.Body className="d-flex flex-column justify-content-between">
                  <div>
                    <Card.Title style={{ fontFamily: 'Quicksand', color: '#E86A92' }}>
                      {item.nombre}
                    </Card.Title>
                    <Card.Text style={{ fontSize: '0.95rem' }}>{item.descripcion}</Card.Text>
                  </div>
                  <div className="mt-3">
                    <Button
                      className="w-100 py-2"
                      style={{
                        background: 'linear-gradient(135deg, #E86A92, #FF6B8B)',
                        border: 'none',
                        borderRadius: '50px',
                      }}
                    >
                      Ver más
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Products;
