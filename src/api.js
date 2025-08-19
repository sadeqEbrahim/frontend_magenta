import axios from 'axios';

const API_URL = "https://backend-magenta-1.onrender.com/api/contacts/";

// GET all contacts
export const fetchContacts = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (err) {
    console.error("Error fetching contacts:", err.response ? err.response.data : err.message);
    throw err;
  }
};

// POST a new contact
export const createContact = async (contactData) => {
  try {
    const response = await axios.post(API_URL, contactData);
    return response.data;
  } catch (err) {
    console.error("Error creating contact:", err.response ? err.response.data : err.message);
    throw err;
  }
};

// DELETE a contact by ID (optional)
export const deleteContact = async (id) => {
  try {
    const response = await axios.delete(`${API_URL}${id}/`);
    return response.data;
  } catch (err) {
    console.error("Error deleting contact:", err.response ? err.response.data : err.message);
    throw err;
  }
};

// UPDATE a contact by ID (optional)
export const updateContact = async (id, contactData) => {
  try {
    const response = await axios.put(`${API_URL}${id}/`, contactData);
    return response.data;
  } catch (err) {
    console.error("Error updating contact:", err.response ? err.response.data : err.message);
    throw err;
  }
};


