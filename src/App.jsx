import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Products from './components/Products';
import Testimonials from './components/Testimonials'; // Using existing component
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      
      <main className="pt-16">
        <Hero />
        
        <section id="productos" className="py-16 bg-gradient-to-b from-rose-50 to-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-rose-800">
              Nuestros Productos 🐾
            </h2>
            <Products />
          </div>
        </section>

        <section id="beneficios" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-rose-800">
              ¿Por qué elegir KittyScan?
            </h2>
            <Testimonials /> {/* Using Testimonials instead of Features */}
          </div>
        </section>

        <section id="contacto" className="py-16 bg-gradient-to-b from-white to-rose-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-rose-800">
              Contáctanos
            </h2>
            <div className="max-w-4xl mx-auto">
              <ContactForm />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default App;