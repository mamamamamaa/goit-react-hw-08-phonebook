import { useEffect } from 'react';
import { Form } from './Form/Form';
import { Users } from './Users/Users';
import { useDispatch, useSelector } from 'react-redux';
import {
  addContact,
  addStorageContacts,
  deleteContact,
} from '../redux/actions';

const STORAGE_DATA = 'contacts';

export const App = () => {
  return (
    <div>
      <h1>Phonebook</h1>
      <Form />
      <h2>Contacts</h2>
      <Users />
    </div>
  );
};
