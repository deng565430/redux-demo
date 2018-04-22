import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from './redux/redux';
import thunk from './redux/redux-thunk';
import arrayThunk from './redux/redux-array';
import { counter } from './index.redux'
import { Provider } from './redux/react-redux';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(counter, applyMiddleware(thunk, arrayThunk))
ReactDOM.render(
  (
    <Provider store={store}>
      <App />
    </Provider>
  ), 
  document.getElementById('root'));
registerServiceWorker();
