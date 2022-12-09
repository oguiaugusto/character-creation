import React from 'react';
import { Route, Routes as Switch } from 'react-router-dom';
import { Home, Login, Register } from '../pages';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" element={ <Home /> } />
      <Route path="/login" element={ <Login /> } />
      <Route path="/register" element={ <Register /> } />
    </Switch>
  );
};

export default Routes;
