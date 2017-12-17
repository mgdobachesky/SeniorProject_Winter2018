// Import required modules
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

// Import requred components
import App from './App';

// Render main App
ReactDOM.render((
  <BrowserRouter>
    <App viewsiteName={document.body.id} />
  </BrowserRouter>
  ), document.getElementById('root')
);
