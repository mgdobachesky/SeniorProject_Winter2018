// Import required modules
import React from 'react';

// Import required components
import HeaderFormJSX from './HeaderForm.jsx';
import './headerForm.scss';

const headerType = ['Pick a size', 'Large', 'Medium', 'Small'];

class HeaderForm extends React.Component {
    constructor(props) {
        // Call parent constructor
        super(props);
        this.state = {
            selected: headerType[0]
        };
        // Other Methods
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this._onSelect = this._onSelect.bind(this)
    }

    _onSelect(headerType) {
        console.log('You selected ', headerType.label);
        this.setState({selected: headerType})
    }

    /*
     * Method to change state based on what a user types
     * Passed down from Viewpage
     */
    handleChange(event) {
        this.props.onChange(event, "header");
    }

    /*
     * Method that constrols what happens after the form has been submitted
     */
    handleSubmit(event) {
        event.preventDefault();
        this.props.onSubmit("header");
    }

    // componentDidMount(){
    //     console.log(this.props.header);
    // }

    componentWillReceiveProps(){
        console.log(this.props.header);
    }

    /*
     * Render that Text Form JSX view
     */
    render() {
        return (HeaderFormJSX.call(this));
    }
}

// Export the Text Form
export default HeaderForm;
