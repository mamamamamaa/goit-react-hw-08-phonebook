import { Bar, Logo, Navigate } from './AppBar.styled';
import { UserMenu } from '../UserMenu/UserMenu';
import { AuthMenu } from '../AuthMenu/AuthMenu';
import { useAuth } from '../../hooks/useAuth';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();
  return (
    <Bar>
      <Logo to="/">PhoneBook</Logo>
      <Navigate>{isLoggedIn ? <UserMenu /> : <AuthMenu />}</Navigate>
    </Bar>
  );
};
