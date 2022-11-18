import { UserMenu } from '../UserMenu/UserMenu';
import { AuthMenu } from '../AuthMenu/AuthMenu';
import { useAuth } from '../../hooks/useAuth';
import { Navigation } from '../Navigation/Navigation';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();
  return (
    <div className="bg-white">
      <div className="container mx-auto flex items-center justify-between h-16 px-16">
        <Navigation />
        <div>{isLoggedIn ? <UserMenu /> : <AuthMenu />}</div>
      </div>
    </div>
  );
};
