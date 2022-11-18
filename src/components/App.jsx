import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { PhoneBook } from '../pages/PhoneBook';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { Home } from '../pages/Home';
import { LogInForm } from './LogInForm/LogInForm';
import { RegisterForm } from './RegisterForm/RegisterForm';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';
import { useAuth } from '../hooks/useAuth';
import { refreshUser } from '../redux/auth/operations';

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <h1>Refreshing user</h1>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route
          path="/login"
          element={
            <RestrictedRoute component={<LogInForm />} redirectTo="/contacts" />
          }
        />
        <Route
          path="/register"
          element={
            <RestrictedRoute
              component={<RegisterForm />}
              redirectTo="/contacts"
            />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute component={<PhoneBook />} redirectTo="/login" />
          }
        />
      </Route>
    </Routes>
  );
};
