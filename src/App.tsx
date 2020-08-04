import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import { GlobalContainer } from './styles/global';
import { Home } from './pages/Home';

export const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Route path="/" component={Home} exact />
      </BrowserRouter>
      <GlobalContainer />
    </>
  );
}