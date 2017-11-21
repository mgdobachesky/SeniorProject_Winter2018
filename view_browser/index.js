// Import required modules
import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';

// Import requred components


// Render main App
ReactDOM.render((
  <HashRouter>
    <h1>{document.body.id}</h1>
  </HashRouter>
  ), document.getElementById('root')
);
