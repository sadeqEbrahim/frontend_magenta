import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';

const API_URL = "https://backend-magenta-1.onrender.com/api/contacts/";

function App() {
  const [contacts, setContacts] = useState([]);

  const fetchContacts = async () => {
    try {
      const res = await axios.get(API_URL);
      setContacts(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h1>Contact Form</h1>
      <ContactForm onSuccess={fetchContacts} />
      <h2>Contacts</h2>
      <ContactList contacts={contacts} />
    </div>
  );
}

export default App;
