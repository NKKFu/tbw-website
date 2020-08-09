import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import { GlobalContainer } from './styles/global';
import { Home } from './pages/Home';
import { TheBestWarriors } from './pages/TheBestWarriors';
import { Page404 } from './pages/Page404';

export const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path={`${process.env.PUBLIC_URL}/`} component={Home} exact />
          <Route path={`${process.env.PUBLIC_URL}/tbw`} component={TheBestWarriors} exact />
          <Route component={Page404}></Route>
        </Switch>
      </BrowserRouter>
      <GlobalContainer />
    </>
  );
}