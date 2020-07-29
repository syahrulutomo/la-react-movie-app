import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import HomeView from '@/views/public/home';
import { PublicRoute } from './components';

export function Routes() {
  return (
    <BrowserRouter basename="/">
      <Switch>
        <PublicRoute exact path="/" component={HomeView} />
      </Switch>
    </BrowserRouter>
  );
}
