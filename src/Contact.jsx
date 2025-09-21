import './Contact.css';
import ContactForm from './ContactForm';
import ContactMap from './ContactMap';

function Contact() {
  return (
<div className="contact-container">
  {/* Map comes first */}
  <div className="map-wrapper">
    <ContactMap />
  </div>

  {/* Contact form last */}
  <ContactForm />
</div>
  );
}

export default Contact;