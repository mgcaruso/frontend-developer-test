import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import './styles/index.css'
import { Provider } from 'react-redux'
import { configureStore as createStore } from '@reduxjs/toolkit'
import mainReducer from './redux/reducers/mainReducer'
// import ScrollToTop from './components/ScrollToTop';

const reduxStore = createStore({ reducer: mainReducer })

const root = ReactDOM.createRoot(document.getElementById('root'));



root.render(
  <React.StrictMode>
    <Provider store={reduxStore}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
