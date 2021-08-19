import React from 'react'
import { BrowserRouter, Switch } from 'react-router-dom'
import HomeView from '@/views/public/home'
import Details from '@/views/public/details'
import { PublicRoute } from './components'

export function Routes() {

  return (
    <BrowserRouter basename="/">
      <Switch >
        <PublicRoute exact path="/" component={HomeView} />
        <PublicRoute path="/details/:id" component={Details} />
      </Switch>
    </BrowserRouter>
  );
}
