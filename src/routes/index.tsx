import React from 'react';
import { Route, Routes as Switch } from 'react-router-dom';
import { Register } from '../pages';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/register" element={ <Register /> } />
    </Switch>
  );
};

export default Routes;
