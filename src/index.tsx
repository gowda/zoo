import { hot } from 'react-hot-loader/root';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import App from './components/app';
import { rootReducer } from './store';

const store = createStore(rootReducer);

const HotApp = hot(App);

ReactDOM.render(
  <Provider store={store}>
    <HotApp />
  </Provider>,
  document.getElementById('root'),
);
