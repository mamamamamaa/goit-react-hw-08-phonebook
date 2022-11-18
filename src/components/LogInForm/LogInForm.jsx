import { Formik } from 'formik';
import {
  FormStyles,
  Label,
  SubmitBtn,
} from '../ContactForm/ContactForm.styled';
import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/operations';

export const LogInForm = () => {
  const dispatch = useDispatch();
  const onSubmit = (data, action) => {
    dispatch(logIn(data));
    action.resetForm();
  };

  return (
    <Formik initialValues={{ email: '', password: '' }} onSubmit={onSubmit}>
      {({ values, handleChange }) => (
        <FormStyles>
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
          <SubmitBtn type="submit">Log In</SubmitBtn>
        </FormStyles>
      )}
    </Formik>
  );
};
