import React from 'react';

const productos = [
  {
    id: 1,
    icon: '🐕',
    nombre: 'Alimento Premium para Perros',
    descripcion: 'Nutrición completa y balanceada para todas las edades',
    precio: '$15.000',
  },
  {
    id: 2,
    icon: '🐱',
    nombre: 'Alimento Gourmet para Gatos',
    descripcion: 'Sabores irresistibles con ingredientes naturales',
    precio: '$12.000',
  },
  {
    id: 3,
    icon: '🎾',
    nombre: 'Juguetes Interactivos',
    descripcion: 'Diversión garantizada para mantener activa a tu mascota',
    precio: '$3.500',
  },
  {
    id: 4,
    icon: '🏠',
    nombre: 'Casitas y Camas',
    descripcion: 'Comodidad y descanso para el hogar de tu mascota',
    precio: '$8.000',
  },
];

function Products() {
  return (
    <section
      id="productos"
      style={{
        padding: '100px 20px',
        background: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
      }}
    >
      <h2 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '3rem', color: '#333' }}>
        Productos Destacados
      </h2>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '2rem',
          maxWidth: '1200px',
          margin: '0 auto',
        }}
      >
        {productos.map(({ id, icon, nombre, descripcion, precio }) => (
          <div
            key={id}
            style={{
              background: 'white',
              borderRadius: '15px',
              boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
              overflow: 'hidden',
              transition: 'transform 0.3s ease',
              cursor: 'pointer',
            }}
            onMouseEnter={e => (e.currentTarget.style.transform = 'translateY(-5px)')}
            onMouseLeave={e => (e.currentTarget.style.transform = 'translateY(0)')}
          >
            <div
              style={{
                height: '200px',
                background: 'linear-gradient(135deg, #ff9a9e, #fecfef)',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                fontSize: '4rem',
              }}
            >
              {icon}
            </div>
            <div style={{ padding: '1.5rem' }}>
              <h3 style={{ fontSize: '1.3rem', marginBottom: '0.5rem', color: '#333' }}>{nombre}</h3>
              <p style={{ color: '#666', marginBottom: '1rem' }}>{descripcion}</p>
              <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#e91e63' }}>{precio}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Products;
