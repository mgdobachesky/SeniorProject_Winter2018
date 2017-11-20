// Import required modules
import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';

// Import requred components
import App from './src/App';

// Render main App
ReactDOM.render((
  <HashRouter>
    <App />
  </HashRouter>
  ), document.getElementById('root')
);
