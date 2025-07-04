import React from 'react';

function TestimonialCard({ testimonial }) {
  return (
    <div className="card shadow-sm p-4 h-100">
      <p className="mb-3 fst-italic">"{testimonial.text}"</p>
      <h6 className="fw-bold mb-0">- {testimonial.name}</h6>
    </div>
  );
}

export default TestimonialCard;
