import './ContactMap.css';

function ContactMap() {
  return (
  <div className="contact-map">
    <h2>Find Us Here!</h2>
    <iframe title="Company Location - Gandhinagar, India"
      src="https://www.google.com/maps?q=FF-102,+Blue+Ocean,+Visat-Koba+Road,+Gandhinagar,+Gujarat,+India+382421&output=embed"
      style={{ border: '0' }}
      allowFullScreen=""
      loading="lazy"/>
  </div>
  );
}

export default ContactMap;