import { nanoid } from 'nanoid';

export const addStorageContacts = contacts => {
  return {
    type: 'contacts/addStorageContacts',
    payload: {
      contacts,
    },
  };
};

export const addContact = (name, number) => {
  return {
    type: 'contact/addContact',
    payload: {
      id: nanoid(),
      name,
      number,
    },
  };
};
export const deleteContact = name => {
  return {
    type: 'contacts/deleteContact',
    payload: {
      name,
    },
  };
};

export const setFilter = filter => {
  return {
    type: 'filter/setFilter',
    payload: {
      filter,
    },
  };
};
