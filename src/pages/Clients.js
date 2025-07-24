import React from 'react';
import './Clients.css';

const clients = [
  {
    name: 'Century Bottling Company',
    logo: '/century.png',
    testimonial: 'Maharshi Packaging Ltd has consistently delivered high-quality packaging for our beverage products. Their reliability and attention to detail are unmatched.'
  },
  {
    name: 'Chandaria Industries',
    logo: '/chandaria.png',
    testimonial: 'We value Maharshi Packaging as a strategic partner. Their eco-friendly solutions and timely deliveries have helped us maintain our standards.'
  },
  {
    name: 'Betatrad Kenya Ltd',
    logo: '/betatrad.png',
    testimonial: 'The team at Maharshi Packaging understands our needs and always provides innovative packaging options. Highly recommended for any business!'
  },
];

function Clients() {
  return (
    <section className="clients">
      <h2>Our Clients</h2>
      <div className="client-logos">
        {clients.map(client => (
          <div className="client" key={client.name}>
            <img src={client.logo} alt={client.name + ' logo'} />
            <h4>{client.name}</h4>
            <p className="testimonial">"{client.testimonial}"</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Clients; 