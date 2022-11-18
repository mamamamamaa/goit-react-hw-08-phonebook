import { useAuth } from '../../hooks/useAuth';
import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/auth/operations';
import { FiLogOut } from 'react-icons/fi';
import style from './UserMenu.module.scss';

export const UserMenu = () => {
  const { user } = useAuth();
  const dispatch = useDispatch();
  const handleClick = () => dispatch(logOut());

  return (
    <div className="flex items-center justify-center gap-4">
      <div>{user.name}</div>
      <button onClick={handleClick} className={style.button}>
        Logout <FiLogOut className="ml-2" />
      </button>
    </div>
  );
};
