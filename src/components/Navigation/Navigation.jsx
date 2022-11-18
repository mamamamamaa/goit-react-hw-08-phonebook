import { Link } from 'react-router-dom';
import { Logo } from './Navigatin.styled';
import { useAuth } from '../../hooks/useAuth';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();
  return (
    <div>
      <Logo to="/">PhoneBook</Logo>
      {isLoggedIn && <Link to="/contacts">Contacts</Link>}
    </div>
  );
};
