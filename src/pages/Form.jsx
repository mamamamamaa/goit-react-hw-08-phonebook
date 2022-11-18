import { ContactForm } from '../components/ContactForm/ContactForm';

export const Form = () => {
  return (
    <div className="bg-white shadow-2xl px-11 py-7 rounded-2xl w-96 h-96">
      <h1 className="text-2xl pb-6">Add contact</h1>
      <ContactForm />
    </div>
  );
};
