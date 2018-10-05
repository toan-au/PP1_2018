/**
 * App entry.
 *
 * @author Toan Au, Cindy Tran, Robert Jeffs, Ronald Rinaldy, Martin Balakrishnan.
 */

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk';

// TODO: uncomment this in final build.
// import registerServiceWorker from './registerServiceWorker';
import App from './App';
import reducers from './redux/reducers';

// The redux store.
const store = createStore(reducers, applyMiddleware(reduxThunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// TODO: uncomment this in final build.
// registerServiceWorker();
