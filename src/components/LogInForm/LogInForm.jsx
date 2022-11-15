import { Formik } from 'formik';
import { FormStyles, Label, SubmitBtn } from '../ContactForm/Form.styled';

export const LogInForm = () => {
  const onSubmit = ({ email, password }, action) => {
    console.log(email);
    console.log(password);
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
