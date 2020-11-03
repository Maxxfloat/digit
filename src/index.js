import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux'
import 'bootstrap/dist/css/bootstrap.min.css';

import App from './Components/Containers/App';
import RootReducer from './Components/Reducers/RootReducer'


const store = createStore(RootReducer)

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
  document.getElementById('root')
);
