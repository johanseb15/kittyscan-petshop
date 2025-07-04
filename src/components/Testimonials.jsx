import React from 'react';
import testimonials from '../data/testimonials';
import TestimonialCard from './TestimonialCard';

function Testimonials() {
  return (
    <div className="row g-4">
      {testimonials.map((testi) => (
        <div key={testi.id} className="col-12 col-md-6 col-lg-4">
          <TestimonialCard testimonial={testi} />
        </div>
      ))}
    </div>
  );
}

export default Testimonials;
