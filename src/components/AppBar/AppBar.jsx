import { Bar, Navigate } from './AppBar.styled';
import { UserMenu } from '../UserMenu/UserMenu';
import { AuthMenu } from '../AuthMenu/AuthMenu';
import { useAuth } from '../../hooks/useAuth';
import { Navigation } from '../Navigation/Navigation';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();
  return (
    <Bar>
      <Navigation />
      <Navigate>{isLoggedIn ? <UserMenu /> : <AuthMenu />}</Navigate>
    </Bar>
  );
};
