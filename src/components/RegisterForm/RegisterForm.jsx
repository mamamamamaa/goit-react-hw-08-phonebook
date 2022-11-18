import { Formik } from 'formik';
import {
  FormStyles,
  Label,
  SubmitBtn,
} from '../ContactForm/ContactForm.styled';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const onSubmit = (data, action) => {
    console.log(data);
    dispatch(register(data));
    action.resetForm();
  };

  return (
    <Formik
      initialValues={{ name: '', email: '', password: '' }}
      onSubmit={onSubmit}
    >
      {({ values, handleChange }) => (
        <FormStyles>
          <Label>
            Name
            <input
              type="text"
              name="name"
              required
              value={values.name}
              onChange={handleChange}
            />
          </Label>
          <br />
          <Label>
            Email
            <input
              type="email"
              name="email"
              required
              value={values.email}
              onChange={handleChange}
            />
          </Label>
          <br />
          <Label>
            Password
            <input
              type="password"
              name="password"
              required
              value={values.password}
              onChange={handleChange}
            />
          </Label>
          <br />
          <SubmitBtn type="submit">Sign Up</SubmitBtn>
        </FormStyles>
      )}
    </Formik>
  );
};
