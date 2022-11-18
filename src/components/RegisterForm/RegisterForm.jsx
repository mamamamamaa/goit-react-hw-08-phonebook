import { Form, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';
import formStyle from '../FormStyles/FormStyles.module.scss';

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
        <Form className={formStyle.form}>
          <label className={formStyle.label}>
            Name
            <input
              className={formStyle.input}
              type="text"
              name="name"
              required
              value={values.name}
              onChange={handleChange}
            />
          </label>
          <label className={formStyle.label}>
            Email
            <input
              className={formStyle.input}
              type="email"
              name="email"
              required
              value={values.email}
              onChange={handleChange}
            />
          </label>
          <label className={formStyle.label}>
            Password
            <input
              className={formStyle.input}
              type="password"
              name="password"
              required
              value={values.password}
              onChange={handleChange}
            />
          </label>
          <button
            className="transition-all duration-700 bg-indigo-500 hover:bg-white hover:text-black text-white px-3 h-12 my-1 block w-72 rounded-md border-indigo-500 shadow-md"
            type="submit"
          >
            Sign Up
          </button>
        </Form>
      )}
    </Formik>
  );
};
