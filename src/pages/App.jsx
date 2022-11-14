import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from '../redux/operations';
import { PhoneBook } from './PhoneBook';
import { Route, Routes } from 'react-router-dom';

export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <Routes>
      <Route path="/" element={<PhoneBook />} />
      <Route path="/test" element={<h1>Hello buddy</h1>} />
    </Routes>
  );
};
