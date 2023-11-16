import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Clients from'./Clients';
import {BrowserRouter} from 'react-router-dom'

import 'font-awesome/css/font-awesome.min.css';


import 'bootstrap/dist/css/bootstrap.min.css'; // Importez Bootstrap CSS une seule fois ici
import Detail from './components/Detail';

const root = ReactDOM.createRoot(document.getElementById('root'));
  
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
