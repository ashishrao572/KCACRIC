import React, { useState } from 'react';
import './ContactForm.css';

function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent successfully!');
  };

  return (
  <div className="contact-form">
    <h2>Send Us a Message</h2>
    <form onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="form-group">
          <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
        </div>
      </div>
      <div className="form-row">
        <div className="form-group">
          <input type="tel" name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <input type="text" name="address" placeholder="Address" value={formData.address} onChange={handleChange} required />
        </div>
      </div>
      <div className="form-group">
        <input type="text" name="subject" placeholder="Subject" value={formData.subject} onChange={handleChange} required />
      </div>
      <div className="form-group">
        <textarea name="message" placeholder="Type your message here..." value={formData.message} onChange={handleChange} rows="5" required></textarea>
      </div>
      <button type="submit">Send Message</button>
    </form>
  </div>
  );
}

export default ContactForm;