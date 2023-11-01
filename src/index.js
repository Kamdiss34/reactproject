import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
//import './font-awesome/css/font-awesome.min.css';

import 'bootstrap/dist/css/bootstrap.min.css'; // Importez Bootstrap CSS une seule fois ici

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

reportWebVitals();
