import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import HomeView from '@/views/public/home';
import { PublicRoute } from './components';

export function Routes() {
  return (
    <BrowserRouter basename="/">
      <Switch>
        <PublicRoute exact path="/" component={HomeView} />
        {/* <PublicRoute exact path="/find" component={FindView} /> */}
      </Switch>
    </BrowserRouter>
  );
}
