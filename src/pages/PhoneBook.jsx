import { Form } from '../components/Form/Form';
import { Users } from '../components/Users/Users';
import { Link } from 'react-router-dom';

export const PhoneBook = () => {
  return (
    <div>
      <Link to="/test">To Test page</Link>
      <h1>Phonebook</h1>
      <Form />
      <h2>Contacts</h2>
      <Users />
    </div>
  );
};
