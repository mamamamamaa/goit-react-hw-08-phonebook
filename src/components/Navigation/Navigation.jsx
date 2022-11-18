import { NavLink } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import style from './Navigation.module.scss';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();
  return (
    <div className="flex">
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? style.activeLogoLink : style.logoLink
        }
      >
        PhoneBook
      </NavLink>
      {isLoggedIn && (
        <div className="flex gap-9 items-center">
          <NavLink
            to="/contacts"
            className={({ isActive }) =>
              isActive ? style.activeContactsLink : style.contactsLink
            }
          >
            Contacts
          </NavLink>
          <NavLink
            to="/form"
            className={({ isActive }) =>
              isActive ? style.activeContactsLink : style.contactsLink
            }
          >
            Add contact
          </NavLink>
        </div>
      )}
    </div>
  );
};
