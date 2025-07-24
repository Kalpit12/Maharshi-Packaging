import React from 'react';
import './Gallery.css';

const images = [
  '/gallery1.jpg', // Film rolls
  '/gallery2.jpg', // Stand-up pouches
  '/gallery3.jpg', // Flour packaging
  '/gallery4.jpg', // Cardboard boxes
  '/gallery5.jpg', // Branded box
  '/gallery6.jpg', // Kenya coffee packaging
  '/gallery7.jpg', // Botanical coffee packaging
];

function Gallery() {
  return (
    <section className="gallery">
      <h2>Our Packaging Gallery</h2>
      <p className="gallery-desc">Explore some of our packaging solutions, materials, and finished products. We handle everything from boxes and tapes to custom packaging for all industries.</p>
      <div className="gallery-grid">
        {images.map((src, idx) => (
          <div className="gallery-img-card" key={idx}>
            <img src={src} alt={`Packaging item ${idx + 1}`} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Gallery; 