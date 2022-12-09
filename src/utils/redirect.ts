import { NavigateFunction } from 'react-router-dom';

const redirectIfLoggedIn = (navigate: NavigateFunction) => {
  const user = localStorage.getItem('user');

  if (user) {
    navigate('/', { replace: true });
  }
};

const redirectIfNotLoggedIn = (navigate: NavigateFunction) => {
  const user = localStorage.getItem('user');

  if (!user) {
    navigate('/login', { replace: true });
  }
};

export { redirectIfLoggedIn, redirectIfNotLoggedIn };
