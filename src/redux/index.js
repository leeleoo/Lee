import React from 'react';
import { createStore,applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import App from './App';
import todoApp from './reducers';

let createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
let store = createStoreWithMiddleware(todoApp);
let unsubscribe = store.subscribe(() =>
  console.log(store.getState())
);
let rootElement = document.body;
React.render(
  // 为了解决 React 0.13 的问题，
  // 一定要把 child 用函数包起来。
  <Provider store={store}>
    {() => <App />}
  </Provider>,
  rootElement
);
