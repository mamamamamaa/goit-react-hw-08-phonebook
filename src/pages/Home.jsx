import { useAuth } from '../hooks/useAuth';

const Home = () => {
  const { user } = useAuth();
  return (
    <h1 className="text-center text-8xl mt-[15%]">
      Hello {user.name ? user.name : 'buddy'}
    </h1>
  );
};

export default Home;
