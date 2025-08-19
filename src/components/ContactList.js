import { useEffect, useState } from "react";
import axios from "axios";

export default function ContactList() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    axios.get(""https://backend-magenta-1.onrender.com/api/contacts/")
      .then(res => setContacts(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h2>Contacts</h2>
      <ul>
        {contacts.map(contact => (
          <li key={contact.id}>
            {contact.name} - {contact.email} - {contact.phone}
          </li>
        ))}
      </ul>
    </div>
  );
}
