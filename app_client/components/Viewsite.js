import React, { Component } from 'react';

class Viewsite extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <h1>{this.props.match.params.viewsiteName}</h1>
        <div className="row">
          <div className="col-md-auto">
            <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
              <a className="nav-link active" id="v-pills-addViewpage-tab" data-toggle="pill" href="#v-pills-addViewpage" role="tab" aria-controls="v-pills-addViewpage" aria-selected="true">+ Add Viewpage</a>
            </div>
          </div>
          <div className="col-md-auto">
            <div className="tab-content" id="v-pills-tabContent">
              <div className="tab-pane fade show active" id="v-pills-addViewpage" role="tabpanel" aria-labelledby="v-pills-addViewpage-tab">
                TODO: Add Viewpages
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Viewsite;
