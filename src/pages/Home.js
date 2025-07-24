import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
// import Packaging3D from '../components/Packaging3D';

const features = [
  {
    title: 'Custom Packaging',
    desc: 'Tailored solutions for every industry and product type.'
  },
  {
    title: 'Eco-Friendly Materials',
    desc: 'Sustainable, recyclable, and biodegradable options.'
  },
  {
    title: 'Fast Delivery',
    desc: 'On-time delivery, every time, across the globe.'
  },
];

const clientLogos = [
  { src: '/century.png', name: 'Century Bottling Company' },
  { src: '/chandaria.png', name: 'Chandaria Industries' },
  { src: '/betatrad.png', name: 'Betatrad Kenya Ltd' },
];

const reviews = [
  {
    name: 'Century Bottling Company',
    review: 'Maharshi Packaging Ltd has consistently delivered high-quality packaging for our beverage products. Their reliability and attention to detail are unmatched.'
  },
  {
    name: 'Chandaria Industries',
    review: 'We value Maharshi Packaging as a strategic partner. Their eco-friendly solutions and timely deliveries have helped us maintain our standards.'
  },
  {
    name: 'Betatrad Kenya Ltd',
    review: 'The team at Maharshi Packaging understands our needs and always provides innovative packaging options. Highly recommended for any business!'
  },
];

function Home() {
  return (
    <div className="home-unique">
      <section className="hero">
        <div className="hero-content">
          <h1>Innovative Packaging for a Sustainable Future</h1>
          <p>Empowering brands with world-class packaging solutions since 1980.</p>
          <Link to="/contact" className="cta-btn">Get in Touch</Link>
        </div>
        <img className="hero-img" src="/Sandcarton.jpg" alt="Packaging showcase" />
      </section>

      <section className="features">
        <h2>Why Choose Maharshi Packaging?</h2>
        <div className="features-list">
          {features.map((f, idx) => (
            <div className="feature" key={idx}>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="quick-clients">
        <h2>Trusted by Leading Brands</h2>
        <div className="client-logo-row">
          {clientLogos.map((client, idx) => (
            <div key={idx} style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
              <img src={client.src} alt={client.name} style={{width:'90px',height:'60px',objectFit:'contain',background:'#fff',borderRadius:'8px',boxShadow:'0 2px 8px rgba(0,0,0,0.06)',padding:'0.5rem'}} />
              <span style={{marginTop:'0.5rem',fontWeight:'bold',color:'#222'}}>{client.name}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="reviews-home">
        <h2>What Our Clients Say</h2>
        <div className="review-list">
          {reviews.map((r, idx) => (
            <div className="review" key={idx}>
              <p className="review-text">"{r.review}"</p>
              <p className="reviewer">- {r.name}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home; 