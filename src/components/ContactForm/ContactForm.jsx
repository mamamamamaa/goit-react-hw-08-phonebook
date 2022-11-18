import { Form, Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsContact } from '../../redux/contacts/selectors';
import { addContact } from '../../redux/contacts/operations';
import { FaRegAddressCard } from 'react-icons/fa';
import formStyles from '../FormStyles/FormStyles.module.scss';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const checkContacts = useSelector(selectIsContact);
  const nameSubmit = ({ name, number }, action) => {
    if (!checkContacts(name)) {
      alert(`${name} is already is contacts`);
      return;
    }
    dispatch(addContact({ name, number }));
    action.resetForm();
  };
  return (
    <Formik initialValues={{ name: '', number: '' }} onSubmit={nameSubmit}>
      {({ values, handleChange }) => (
        <Form className={formStyles.form}>
          <label className={formStyles.label}>
            Name
            <input
              className={formStyles.input}
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              placeholder="..."
              required
              value={values.name}
              onChange={handleChange}
            />
          </label>
          <label className={formStyles.label}>
            Number
            <input
              className={formStyles.input}
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              placeholder="..."
              value={values.number}
              onChange={handleChange}
            />
          </label>
          <button
            type="submit"
            className="transition-all duration-700 hover:bg-white hover:text-black flex items-center justify-center w-[50%] mx-auto bg-indigo-500 text-white text-xl px-4 py-1 rounded-xl shadow-lg"
          >
            <FaRegAddressCard />
            Add
          </button>
        </Form>
      )}
    </Formik>
  );
};
