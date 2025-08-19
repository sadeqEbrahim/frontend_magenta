import axios from "axios";

const API_URL = "http://127.0.0.1:8000/api/"; // Django API base

export const getContacts = async () => {
  try {
    const response = await axios.get(`${API_URL}contacts/`);
    return response.data;
  } catch (error) {
    console.error("Error fetching contacts:", error);
    return [];
  }
};

