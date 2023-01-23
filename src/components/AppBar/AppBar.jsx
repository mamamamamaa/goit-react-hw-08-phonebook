import { UserMenu } from '../UserMenu/UserMenu';
import { AuthMenu } from '../AuthMenu/AuthMenu';
import { useAuth } from '../../hooks/useAuth';
import { Navigation } from '../Navigation/Navigation';

import style from './AppBar.module.css';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();
  return (
    <div className={style.bg}>
      <div className={style.container}>
        <Navigation />
        <div>{isLoggedIn ? <UserMenu /> : <AuthMenu />}</div>
      </div>
    </div>
  );
};
