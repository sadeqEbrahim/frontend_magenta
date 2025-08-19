import React, { useState, useEffect } from 'react';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import { fetchContacts } from './api';

function App() {
  const [contacts, setContacts] = useState([]);

  const loadContacts = async () => {
    try {
      const data = await fetchContacts();
      setContacts(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    loadContacts();
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h1>Contact Form</h1>
      <ContactForm onSuccess={loadContacts} />
      <h2>Contacts</h2>
      <ContactList contacts={contacts} />
    </div>
  );
}

export default App;
