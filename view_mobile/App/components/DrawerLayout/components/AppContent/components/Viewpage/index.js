// Import required modules
import React from 'react';

// Import requred components
import ViewpageJSX from './Viewpage.js';

class Viewpage extends React.Component {
  constructor(props) {
    // Call parent constructor
    super(props);

    // User Database Methods
    this.handleRequestUserDatabase = this.handleRequestUserDatabase.bind(this);

    // Set initial state
    this.state = {
      viewpage: {}
    };
  }

  /*
   * Method that allows components to request a Viewsite's associated User Database
   * Passed down from the main Application
   */
  handleRequestUserDatabase(viewsiteId) {
    this.props.onRequestUserDatabase(viewsiteId);
  }

  /*
   * React component lifecycle method that controls what happens before this
   * component receives props
   * Used to determine what subsequent Viewpages have been selected
   * during React Native navigation
   */
  componentWillReceiveProps(nextProps) {
    if(nextProps.match.params.viewpageId
      && this.props.viewpages
      && this.props.viewpages.length >= 1) {
      // Initialize variables for the selected Viewpage and an array of existing Viewpages
      let viewpageId = nextProps.match.params.viewpageId;
      let viewpages = this.props.viewpages;
      // Search the array of Viewpages for the selected Viewpage
      for(let viewpage of viewpages) {
        if(viewpageId == viewpage._id) {
          // Set state to reflect the currently selected Viewpage
          this.setState({
            viewpage: viewpage
          });
        }
      }
    }
  }

  /*
   * React component lifecycle method that controls what happens after this
   * component mounts
   * Used to determine what initial Viewpage was selected
   * during React Native navigation
   */
  componentDidMount() {
    if(this.props.match.params.viewpageId
      && this.props.viewpages
      && this.props.viewpages.length >= 1) {
      // Initialize variables for the selected Viewpage and an array of existing Viewpages
      let viewpageId = this.props.match.params.viewpageId;
      let viewpages = this.props.viewpages;
      // Search the array of Viewpages for the selected Viewpage
      for(let viewpage of viewpages) {
        if(viewpageId == viewpage._id) {
          // Set state to reflect the currently selected Viewpage
          this.setState({
            viewpage: viewpage
          });
        }
      }
    }
  }

  /*
   * Render Viewpage JSX view
   */
  render() {
    return(ViewpageJSX.call(this));
  }
}

// Export Viewpage
export default Viewpage;
