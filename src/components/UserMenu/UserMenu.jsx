import { useAuth } from '../../hooks/useAuth';
import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/auth/operations';

export const UserMenu = () => {
  const { user } = useAuth();
  const dispatch = useDispatch();
  return (
    <>
      <p>Welcome {user.name}</p>
      <button
        onClick={() => {
          dispatch(logOut());
        }}
      >
        Logout
      </button>
    </>
  );
};
