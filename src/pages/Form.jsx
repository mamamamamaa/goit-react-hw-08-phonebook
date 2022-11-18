import { ContactForm } from '../components/ContactForm/ContactForm';
import formStyle from '../components/FormStyles/FormStyles.module.scss';

const Form = () => {
  return (
    <div className={formStyle.formContainer}>
      <h1 className="text-2xl pb-6">Add contact</h1>
      <ContactForm />
    </div>
  );
};

export default Form;
