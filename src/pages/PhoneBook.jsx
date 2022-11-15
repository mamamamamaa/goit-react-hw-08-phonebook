import { ContactForm } from '../components/ContactForm/ContactForm';
import { Users } from '../components/Users/Users';

export const PhoneBook = () => {
  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Users />
    </>
  );
};
