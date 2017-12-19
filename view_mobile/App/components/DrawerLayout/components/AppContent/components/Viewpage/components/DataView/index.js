// Import required modules
import React from 'react';

// Import required components
import DataViewJSX from './DataView.js';

class DataView extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(DataViewJSX.call(this));
  }
}

export default DataView;
