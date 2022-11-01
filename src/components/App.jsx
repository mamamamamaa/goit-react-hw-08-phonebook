import { Form } from './Form/Form';
import { Users } from './Users/Users';

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
