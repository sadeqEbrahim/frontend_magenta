import React, { useState, useEffect } from 'react';
import axios from 'axios';

const API_URL = "https://backend-magenta-1.onrender.com/api/contacts/";

function App() {
  const [contacts, setContacts] = useState([]);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    try {
      const res = await axios.get(API_URL);
      setContacts(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await axios.post(API_URL, formData);
      alert("Contact saved!");
      setFormData({ name: '', email: '', message: '' });
      fetchContacts();
    } catch (err) {
      console.error("Axios error:", err.response ? err.response.data : err.message);
      alert("Failed to save contact");
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Contact Form</h1>
      <form onSubmit={handleSubmit}>
        <input name="name" value={formData.name} onChange={handleChange} placeholder="Name" required />
        <input name="email" value={formData.email} onChange={handleChange} placeholder="Email" required />
        <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Message" required />
        <button type="submit">Submit</button>
      </form>
      <h2>Contacts</h2>
      <ul>
        {contacts.map(contact => (
          <li key={contact.id}>{contact.name} ({contact.email}): {contact.message}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;

