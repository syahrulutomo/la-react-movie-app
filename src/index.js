import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {
  createStore, applyMiddleware, compose, combineReducers,
} from 'redux';
import thunk from 'redux-thunk';

import eventReducer from '@/services/redux/reducers/event';
import cityReducer from '@/services/redux/reducers/city';
import { Routes } from './routes';

import './assets/styles/index.scss';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  event: eventReducer,
  city: cityReducer,
});

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

const app = (
  <Provider store={store}>
    <Routes />
  </Provider>
);

ReactDOM.render(app, document.getElementById('app'));
