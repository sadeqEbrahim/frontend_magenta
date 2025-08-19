import React, { useState } from 'react';
import axios from 'axios';

const API_URL = "https://backend-magenta-1.onrender.com/api/contacts/";

function ContactForm({ onSuccess }) {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await axios.post(API_URL, formData);
      alert("Contact saved!");
      setFormData({ name: '', email: '', message: '' });
      onSuccess(); // Refresh the contact list
    } catch (err) {
      console.error("Axios error:", err.response ? err.response.data : err.message);
      alert("Failed to save contact");
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
      <input name="name" value={formData.name} onChange={handleChange} placeholder="Name" required />
      <input name="email" value={formData.email} onChange={handleChange} placeholder="Email" required />
      <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Message" required />
      <button type="submit">Submit</button>
    </form>
  );
}

export default ContactForm;
