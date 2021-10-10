import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './app';
import { Provider } from "react-redux"
import reportWebVitals from './reportWebVitals';
import { store } from './store';
import GlobalStyle from './globalStyles';

ReactDOM.render(
  <React.StrictMode>
    
    <Provider store={store}>
      
        <App />
      
    </Provider>
   
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
