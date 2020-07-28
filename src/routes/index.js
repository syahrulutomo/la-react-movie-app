import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import { PartialHeader, PartialPublicHeader } from '@/components';
import HomeView from '@/views/public/home';
import { PublicRoute } from './components';

export function Routes() {
  const isLoggedin = false;

  return (
    <BrowserRouter basename="/">
      {
        isLoggedin ? <PartialHeader /> : <PartialPublicHeader />
      }

      <Switch>
        <PublicRoute exact path="/" component={HomeView} />
      </Switch>
    </BrowserRouter>
  );
}
