import React, { useState } from 'react';
import './Contact.css';
import ContactForm from './ContactForm';
import ContactMap from './ContactMap';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent successfully!');
  };

  return (
<div className="contact-container">
  <h1>Contact Us</h1>

  {/* Map comes first */}
  <div className="map-wrapper">
    <ContactMap />
  </div>

  {/* Offices in a responsive row */}
  <div className="office-grid">
    <div className="contact-info">
      <h2>Head Office</h2>
      <p><strong>VSA Global Technologies</strong></p>
      <p>FF-102, Blue Ocean, Visat-Koba Road, Gandhinagar, Gujarat, India - 382421</p>
      <p><strong>Email: </strong><a href="mailto:contact@vsa-tech.com">hq@vsa-tech.com</a></p>
      <p><strong>Phone: </strong><a href="tel:+917899208499">+91 78992 08499</a></p>
    </div>

    {/* Add more office boxes as needed */}
    <div className="contact-info">
      <h2>Branch Office</h2>
      <p><strong>VSA Global Technologies</strong></p>
      <p>4482, 6th Cross, St Mary's Road, Mysore, Karnataka, India - 570007</p>
      <p><strong>Email: </strong><a href="mailto:branch@vsa-tech.com">mysuru@vsa-tech.com</a></p>
      <p><strong>Phone: </strong> <a href="tel:+919738637484">+91 97386 37484</a></p>
    </div>
    
    {/* Add more office boxes as needed */}
    <div className="contact-info">
      <h2>Branch Office</h2>
      <p><strong>VSA Global Technologies</strong></p>
      <p>Edmonton, AB, Canada</p>
      <p><strong>Email: </strong><a href="mailto:branch@vsa-tech.com">edmonton@vsa-tech.com</a></p>
      <p><strong>Phone: </strong><a href="tel:+1 (346) 657-1419">+1 (346) 657-1419</a></p>
    </div>
    
    {/* Add more office boxes as needed */}
    <div className="contact-info">
      <h2>Branch Office</h2>
      <p><strong>VSA Global Technologies</strong></p>
      <p>New York, United States Of America - 12401</p>
      <p><strong>Email: </strong><a href="mailto:branch@vsa-tech.com">nyc@vsa-tech.com</a></p>
      <p><strong>Phone: </strong> <a href="tel:+1 (862) 324-1620">+1 (862) 324-1620</a></p>
    </div>
  </div>

  {/* Contact form last */}
  <ContactForm />
</div>
  );
}

export default Contact;