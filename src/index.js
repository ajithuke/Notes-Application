import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import FirebaseProvider from './context/Firebase'
import {BrowserRouter} from 'react-router-dom'
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
        <FirebaseProvider />
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
