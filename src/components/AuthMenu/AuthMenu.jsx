import { NavLink } from 'react-router-dom';
import style from '../Navigation/Navigation.module.scss';

export const AuthMenu = () => {
  return (
    <ul className="flex items-center gap-10">
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? style.activeContactsLink : style.contactsLink
          }
          to="/register"
        >
          Register
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? style.activeContactsLink : style.contactsLink
          }
          to="/login"
        >
          Log In
        </NavLink>
      </li>
    </ul>
  );
};
