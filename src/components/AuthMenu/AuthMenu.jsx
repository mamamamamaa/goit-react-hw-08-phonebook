import { NavLink } from 'react-router-dom';

export const AuthMenu = () => {
  return (
    <>
      <NavLink to="/register">Register</NavLink>
      <NavLink to="/login">Log In</NavLink>
    </>
  );
};
