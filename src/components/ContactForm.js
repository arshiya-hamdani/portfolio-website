import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import './ContactForm.css';

function ContactForm() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_v0zz1pj', 'template_dj2kzjw', form.current, 'L7fGdz4x3pseSDQgf')
      .then((result) => {
        console.log(result.text);
        alert('Message sent successfully!');
      }, (error) => {
        console.log(error.text);
        alert('An error occurred, please try again.');
      });

    e.target.reset();
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container-xl">
        <div className="contact-info-cont">
          <div className="contact-info">
            <div className="section-title">
              <h2>LET'S CONNECT</h2>
            </div>
            <p>Please fill out the form on this section to contact me.</p>
          </div>
          <form ref={form} onSubmit={sendEmail} className="contact-form">
            <h3>Let's collaborate and create something together!</h3>
            <input type="text" id="name" className="input-control" placeholder="Your Name" name="name" required />
            <input type="email" id="email" className="input-control" placeholder="Your Email" name="email" required />
            <textarea className="input-control" placeholder="Message" name="message" required />
            <div className="form-btn">
              <button type="submit" className="btn primary-btn">Send Message</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;
