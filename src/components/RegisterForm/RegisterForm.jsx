import { Formik } from 'formik';
import { FormStyles, Label, SubmitBtn } from '../ContactForm/Form.styled';

export const RegisterForm = () => {
  const onSubmit = ({ name, email, password }, action) => {
    console.log(name);
    console.log(email);
    console.log(password);
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
