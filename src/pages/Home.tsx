import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { redirectIfNotLoggedIn } from '../utils/redirect';

const Home: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    redirectIfNotLoggedIn(navigate);
  }, []);

  return (
    <div>Here goes all the stories and characters!</div>
  );
};

export default Home;
