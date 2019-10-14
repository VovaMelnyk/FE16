import React from 'react';
import './Contact.css';

const Contact = props => (
  <form action="">
    <input type="text" placeholder="Login" />
    <input type="email" placeholder="Email" />
    <input type="password" placeholder="Password" />
    <button type="submit">Send</button>
  </form>
);

export default Contact;
