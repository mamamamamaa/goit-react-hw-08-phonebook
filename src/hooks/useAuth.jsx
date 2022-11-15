import { useSelector } from 'react-redux';
import {
  selectLoggedIn,
  selectRefreshing,
  selectUser,
} from '../redux/auth/selectors';

export const useAuth = () => {
  const isLoggedIn = useSelector(selectLoggedIn);
  const user = useSelector(selectUser);
  const isRefreshing = useSelector(selectRefreshing);

  return { isLoggedIn, user, isRefreshing };
};
