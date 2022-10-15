import { nanoid } from 'nanoid';

import { useState, useEffect } from 'react';

import { Form } from './Form/Form';

import { Users } from './Users/Users';

const STORAGE_DATA = 'contacts';

export const App = () => {
  const [contacts, setContacts] = useState([]);

  // useEffect(() => {
  //   const storageData = JSON.parse(localStorage.getItem(STORAGE_DATA));
  //   if (storageData.length > 0) {
  //     setContacts(storageData);
  //   }
  // }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE_DATA, JSON.stringify(contacts));
  }, [contacts]);

  const handleSubmit = ({ name, number }, actions) => {
    const normalizedName = name.toLowerCase();
    if (!contacts.find(user => user.name.toLowerCase() === normalizedName)) {
      setContacts([...contacts, { id: nanoid(), name, number }]);
    } else {
      alert(`${name} is already is contacts`);
    }
    actions.resetForm();
  };

  const handleDelete = name => {
    setContacts(contacts.filter(user => user.name !== name));
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <Form handleSubmit={handleSubmit} />
      <h2>Contacts</h2>
      <Users contacts={contacts} handleDelete={handleDelete} />
    </div>
  );
};
