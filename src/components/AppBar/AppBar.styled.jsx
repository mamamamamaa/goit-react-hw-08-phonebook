import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Bar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 40px;
  background-color: #8d7e4e;
  color: blanchedalmond;
`;

export const Navigate = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const StyledLink = styled(NavLink)`
  color: blanchedalmond;
  text-decoration: none;

  &.active {
    background-color: bisque;
    border-radius: 10px;
    color: black;
    padding: 5px 10px;
  }
`;
