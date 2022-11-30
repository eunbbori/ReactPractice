import React from 'react'; 
import ReactDOM from 'react-dom/client';
import { createStore } from 'redux';
import { Provider } from 'react-redux'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import rootReducer from './modules';

const store = createStore(rootReducer);  

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( 
  <Provider store={store}>
    <App />
  </Provider>
);


reportWebVitals();
