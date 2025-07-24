import React from 'react';
import './About.css';

function About() {
  return (
    <section className="about">
      <h2>About Us</h2>
      <p>Maharshi Packaging Ltd is a leader in providing high-quality packaging solutions for a wide range of industries. With decades of experience and a commitment to excellence, we deliver innovative and sustainable packaging to meet our clients' needs.</p>
      <h3>Our Mission</h3>
      <p>To deliver world-class packaging solutions that help our clients succeed, while maintaining a focus on sustainability and innovation.</p>
      <h3>Our History</h3>
      <p>Founded in 1980, Maharshi Packaging Ltd has grown from a small local business to a trusted partner for companies across the globe. Our dedication to quality and customer satisfaction has been the cornerstone of our success.</p>
      <h3>Our Team</h3>
      <div className="team-section">
        <div className="team-member">
          <img src="/ceo.jpg" alt="CEO" />
          <h4>Mr. Vipul Mansi</h4>
          <p>CEO & Founder</p>
        </div>
      </div>
    </section>
  );
}

export default About; 