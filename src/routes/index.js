import React, { Suspense, lazy } from 'react'
import { BrowserRouter, Switch } from 'react-router-dom'
// import HomeView from '@/views/public/home'
// import Details from '@/views/public/details'
import { PublicRoute } from './components'

const Home = lazy(() => import('@/views/public/home'));
const Details = lazy(() => import('@/views/public/details'));

export function Routes() {

  return (
    <BrowserRouter basename="/">
      <Suspense fallback={<div className="loading">Loading...</div>}>
        <Switch >
          <PublicRoute exact path="/" component={Home} />
          <PublicRoute path="/details/:id" component={Details} />
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
}
