import React, { useState } from 'react';
import '../styles/contact.css';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();
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
    <section>
      <h2>Contact</h2>
      {/* Add a contact form with fields for name, email address, and message */}
    </section>
  );
};









export default Contact;
