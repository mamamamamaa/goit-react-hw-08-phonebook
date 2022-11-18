import { Form, Formik } from 'formik';
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
        <Form>
          <label>
            Email
            <input
              type="email"
              name="email"
              required
              value={values.email}
              onChange={handleChange}
            />
          </label>
          <label>
            Password
            <input
              type="password"
              name="password"
              required
              value={values.password}
              onChange={handleChange}
            />
          </label>
          <button type="submit">Log In</button>
        </Form>
      )}
    </Formik>
  );
};
