import React, { Component } from 'react';

class Viewsite extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <h1>{this.props.match.params.viewsiteName}</h1>
      </div>
    );
  }
}

export default Viewsite;
