import { useDispatch } from 'react-redux';
import { lazy, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { Home } from '../pages/Home';
import { LogIn } from '../pages/LogIn';
import { Register } from '../pages/Register';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';
import { useAuth } from '../hooks/useAuth';
import { refreshUser } from '../redux/auth/operations';
import { Contacts } from '../pages/Contacts';
import { Form } from '../pages/Form';
import { Loader } from './Loaders/Loader';

// const HomePage = lazy(() => import('../pages/Home'));
// const RegisterPage = lazy(() => import('../pages/Register'));
// const LoginPage = lazy(() => import('../pages/Login'));
// const ContactsPage = lazy(() => import('../pages/Contacts'));
// const FormPage = lazy(() => import('../pages/Form'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <Loader isOpen={isRefreshing} />
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route
          path="/login"
          element={
            <RestrictedRoute component={<LogIn />} redirectTo="/contacts" />
          }
        />
        <Route
          path="/register"
          element={
            <RestrictedRoute component={<Register />} redirectTo="/contacts" />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute component={<Contacts />} redirectTo="/login" />
          }
        />
        <Route
          path="/form"
          element={<PrivateRoute component={<Form />} redirectTo="/login" />}
        />
      </Route>
    </Routes>
  );
};
