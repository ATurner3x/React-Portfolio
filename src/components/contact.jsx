import React, { useState } from 'react';
import '../styles/contact.css';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [emailErrorMessage, setEmailErrorMessage] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();
    
     // Reset any previous errors
     setNameError(false);
     setEmailError(false);
     setEmailErrorMessage('');
    
    // Validate the form fields
    let formValid = true;

    if (name.trim() === '') {
      setNameError(true);
      formValid = false;
    }

    if (email.trim() === '') {
      setEmailError(true);
      formValid = false;
    } else if (!isValidEmail(email)) {
      setEmailError(true);
      setEmailErrorMessage('Please enter a valid email address');
      formValid = false;
    }

    if (!formValid) {
      return;
    }
    
    
    
    // TODO: Handle form submission logic here
    // access the form data (name, email, message) from the useState variables (name, email, message)
    // send the data to a server or displaying a success message.

    console.log('Form submitted:', { name, email, message });

    // Reset the form fields after submission
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <section className="contact-container">
      <h2>Contact Me Here</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </section>
  );
};

export default Contact;