import React from 'react';

function ContactList({ contacts }) {
  return (
    <ul>
      {contacts.map(contact => (
        <li key={contact.id}>
          <strong>{contact.name}</strong> ({contact.email}): {contact.message}
        </li>
      ))}
    </ul>
  );
}

export default ContactList;
