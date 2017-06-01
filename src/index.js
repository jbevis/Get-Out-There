import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { BrowserRouter as Router, browserHistory, Route } from 'react-router-dom';

import rootReducer from './reducers/index'

import AppContainer from './containers/AppContainer';
import './index.css';

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__&& window.__REDUX_DEVTOOLS_EXTENSION__();
const store = createStore(rootReducer, devTools, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={AppContainer}/>
    </Router>
  </Provider>
  , document.getElementById('root')
);
