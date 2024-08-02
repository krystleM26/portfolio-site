import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import DOMPurify from 'dompurify';
import Confetti from 'react-dom-confetti';
import '../styles/contactForm.css'; // Import your CSS file

export default function ContactForm() {
  const initialState = {
    name: '',
    email: '',
    message: '',
  };

  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isMessageSent, setIsMessageSent] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validateErrors = validateForm();
    if (Object.keys(validateErrors).length > 0) {
      setErrors(validateErrors);
      return;
    }
    setIsLoading(true);

    const { name, email, message } = formData;
    const sanitizedData = {
      name: DOMPurify.sanitize(name),
      email: DOMPurify.sanitize(email),
      message: DOMPurify.sanitize(message),
    };
    const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    const userId = process.env.REACT_APP_EMAILJS_USER_ID;

    emailjs
      .send(serviceId, templateId, sanitizedData, userId)
      .then((response) => {
        console.log('Email sent successfully', response.text);
        setFormData(initialState);
        setErrors({});
        setIsMessageSent(true);
      })
      .catch((error) => {
        console.error('Error sending email', error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const validateForm = () => {
    const { name, email, message } = formData;
    const errors = {};
    if (!name) {
      errors.name = 'Name is required';
    }
    if (!email) {
      errors.email = 'Email is required';
    } else if (!isValidEmail(email)) {
      errors.email = 'Invalid email format';
    }
    if (!message) {
      errors.message = 'Message is required';
    }
    return errors;
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const confettiConfig = {
    angle: 90,
    spread: 360,
    startVelocity: 40,
    elementCount: 70,
    dragFriction: 0.12,
    duration: 3000,
    stagger: 3,
    width: '10px',
    height: '10px',
    colors: ['#ff0000', '#00ff00', '#0000ff'],
  };

  return (

    <div className="contact-menu"> {/* Center the form */}
    <h2>Work With Me!</h2>

    <div className="overlay" style={{ display: isMessageSent ? 'block' : 'none' }}>
        <Confetti active={isMessageSent} config={confettiConfig} />
      </div>
    
      {!isMessageSent && (
        <form onSubmit={handleSubmit} className="form-container">
          <input
            id="name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
          />
          {errors.name && <div className="error">{errors.name}</div>}
          <input
            id="email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
          />
          {errors.email && <div className="error">{errors.email}</div>}
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
          ></textarea>
          {errors.message && <div className="error">{errors.message}</div>}
          <button type="submit" disabled={isLoading}>
            {isLoading ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      )}
      {isMessageSent && (
        <div className="success-message">
          <p>SUCCESS!!!</p>
          <p>Message sent successfully!</p>
          <p>You can exit this page</p>
        </div>
      )}
    </div>
  );
}
