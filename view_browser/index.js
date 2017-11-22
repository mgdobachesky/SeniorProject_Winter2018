// Import required modules
import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';

// Import requred components
import App from './App';

// Render main App
ReactDOM.render((
  <HashRouter>
    <App viewsiteName={document.body.id} />
  </HashRouter>
  ), document.getElementById('root')
);
