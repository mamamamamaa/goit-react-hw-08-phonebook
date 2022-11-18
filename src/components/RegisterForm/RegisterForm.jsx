import { Form, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const onSubmit = (data, action) => {
    dispatch(register(data));
    action.resetForm();
  };

  return (
    <Formik
      initialValues={{ name: '', email: '', password: '' }}
      onSubmit={onSubmit}
    >
      {({ values, handleChange }) => (
        <Form>
          <label>
            Name
            <input
              type="text"
              name="name"
              required
              value={values.name}
              onChange={handleChange}
            />
          </label>
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
          <button type="submit">Sign Up</button>
        </Form>
      )}
    </Formik>
  );
};
