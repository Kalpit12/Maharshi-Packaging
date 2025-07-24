import React, { useState } from 'react';
import './Contact.css';

function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would send the form data to your backend or EmailJS
    setSubmitted(true);
    // Reset form (optional)
    setForm({ name: '', email: '', phone: '', company: '', subject: '', message: '' });
  };

  return (
    <section className="contact-section">
      <h2>Contact Us</h2>
      <p className="contact-desc">We'd love to hear from you! Fill out the form below and our team will get back to you as soon as possible.</p>
      <div className="contact-card">
        {submitted ? (
          <div className="contact-success">Thank you for reaching out! We'll get back to you soon.</div>
        ) : (
          <form className="contact-form" onSubmit={handleSubmit} autoComplete="off">
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Name*</label>
                <input type="text" id="name" name="name" value={form.name} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email*</label>
                <input type="email" id="email" name="email" value={form.email} onChange={handleChange} required />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="phone">Phone</label>
                <input type="tel" id="phone" name="phone" value={form.phone} onChange={handleChange} />
              </div>
              <div className="form-group">
                <label htmlFor="company">Company</label>
                <input type="text" id="company" name="company" value={form.company} onChange={handleChange} />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="subject">Subject*</label>
              <input type="text" id="subject" name="subject" value={form.subject} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message*</label>
              <textarea id="message" name="message" rows="5" value={form.message} onChange={handleChange} required />
            </div>
            <button type="submit" className="send-btn">Send Message</button>
          </form>
        )}
        <div className="contact-note">
          <strong>Privacy:</strong> Your information will only be used to respond to your inquiry and will not be shared.
        </div>
      </div>
    </section>
  );
}

export default Contact; 