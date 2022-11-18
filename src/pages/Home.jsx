import styled from '@emotion/styled';
import { useAuth } from '../hooks/useAuth';

export const HomeTitle = styled.h1`
  text-align: center;
  font-size: 80px;
  margin-top: 15%;
`;

export const Home = () => {
  const { user } = useAuth();
  return <HomeTitle>Hello {user.name ? user.name : 'buddy'}</HomeTitle>;
};
