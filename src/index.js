import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import {
  createStore, applyMiddleware, compose, combineReducers,
} from 'redux'
import thunk from 'redux-thunk'

import movieReducer from '@/services/redux/reducers/movie'
import searchReducer from '@/services/redux/reducers/search'
import { Routes } from './routes'

import 'normalize.css'
import './assets/styles/index.scss'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const rootReducer = combineReducers({
  movie: movieReducer,
  search: searchReducer
})

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))

const app = (
  <Provider store={store}>
    <Routes />
  </Provider>
)

ReactDOM.render(app, document.getElementById('app'))
