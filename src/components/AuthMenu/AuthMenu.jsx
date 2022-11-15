import { StyledLink } from '../AppBar/AppBar.styled';

export const AuthMenu = () => {
  return (
    <>
      <StyledLink to="/register">Register</StyledLink>
      <StyledLink to="/login">Log In</StyledLink>
    </>
  );
};
