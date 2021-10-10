import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './app';
import { Provider } from "react-redux"
import reportWebVitals from './reportWebVitals';

import GlobalStyle from './globalStyles';

import { saga, store } from './store';
import sagaWatcher from './store/sagas';


saga.run(sagaWatcher)


ReactDOM.render(
  <React.StrictMode>
    
    <Provider store={store}>
      
        <App />
      
    </Provider>
   
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
