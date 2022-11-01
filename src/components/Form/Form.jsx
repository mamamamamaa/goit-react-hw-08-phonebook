import { Formik } from 'formik';
import { FormStyles, Label, SubmitBtn } from './Form.styled';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/actions';
import { getContacts } from '../../redux/selectors';

const checkContacts = (contacts, newUser) => {
  const normalizedName = newUser.toLowerCase();
  return !contacts.find(user => user.name.toLowerCase() === normalizedName);
};

const STORAGE_DATA = 'contacts';

export const Form = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const nameSubmit = ({ name, number }, action) => {
    if (!checkContacts(contacts, name)) {
      alert(`${name} is already is contacts`);
      action.resetForm();
      return;
    }
    dispatch(addContact(name, number));
    localStorage.setItem(STORAGE_DATA, JSON.stringify(contacts));
    action.resetForm();
  };
  return (
    <Formik initialValues={{ name: '', number: '' }} onSubmit={nameSubmit}>
      {({ values, handleChange }) => (
        <FormStyles>
          <Label>
            Name
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              value={values.name}
              onChange={handleChange}
            />
          </Label>
          <br />
          <Label>
            Number
            <input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              value={values.number}
              onChange={handleChange}
            />
          </Label>
          <br />
          <SubmitBtn type="submit">Add contact</SubmitBtn>
        </FormStyles>
      )}
    </Formik>
  );
};
