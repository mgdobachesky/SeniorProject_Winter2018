// Import required modules
import React from 'react';

// Import required components
import FormJSX from './Form.jsx';
import './form.scss';

// Import required services
import FormInputService from './services/FormInputService';
import ElementService from '../../services/ElementService';

class Form extends React.Component {
    constructor(props) {
        // Call parent constructor
        super(props);

        // Services
        this.manageFormInputService = new FormInputService();
        this.manageElementService = new ElementService();

        // Form Text Input Methods
        this.handleCreateFormInput = this.handleCreateFormInput.bind(this);
        this.handleEditFormInput = this.handleEditFormInput.bind(this);
        this.handleUpdateFormInput = this.handleUpdateFormInput.bind(this);
        this.handleDeleteFormInput = this.handleDeleteFormInput.bind(this);
        // Other Methods
        this.handleHideAllForms = this.handleHideAllForms.bind(this);
        this.handleSetGlobalState = this.handleSetGlobalState.bind(this);
        this.handleClearLocalState = this.handleClearLocalState.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSortableUpdate = this.handleSortableUpdate.bind(this);

        // Set initial state
        this.state = {
            viewsiteId: "",
            viewpageId: "",
            element: {},
            textbox: {
                _id: "",
                kind: "textbox",
                textboxLabel: ""
            },
            formInputSuccess: "",
            formInputError: ""
        };
    }

    /*
     * Method that allows users to create Form Inputs
     */
    handleCreateFormInput(kind) {
        // Prepare HTTP API request data
        let requestData = {};
        requestData.viewsiteId = this.state.viewsiteId;
        requestData.viewpageId = this.state.viewpageId;
        requestData.elementId = this.state.element._id;
        requestData.kind = kind;
        // Continue preparing HTTP API request data based on Form Input kind
        if (kind === "textbox") {
            let createTextbox = this.state.textbox;
            requestData.textboxLabel = createTextbox.textboxLabel;
            $(".createTextbox").hide("medium");
        }
        // Send request to create a new Form Input
        this.manageFormInputService.createFormInput(requestData)
            .then((results) => {
                    // Afterwards, update Global Viewsite state to reflect changes
                    this.handleSetGlobalState(results.data, "viewsite");
                    // Follow up by clearing form state
                    this.handleClearLocalState();
                },
                (error) => {
                    // Handle errors
                    this.setState({
                        formInputSuccess: "",
                        formInputError: error.response.data
                    });
                });
    }

    /*
     * Method that sets local state to prepare a Form Input to be edited
     */
    handleEditFormInput(event) {
        // Prepare form for update based on Form Input kind
        if (event.kind === "textbox") {
            // Set state of the Textbox form to selected Textbox
            let editTextbox = this.state.textbox;
            editTextbox._id = event._id;
            editTextbox.kind = event.kind;
            editTextbox.textboxLabel = event.textboxLabel;
            this.setState({
                textbox: editTextbox
            });
            // Show the update Textbox form with populated local state information
            let isVisible = $(".updateTextbox").is(':visible');
            this.handleHideAllForms(".updateTextbox", isVisible);
            //$(".updateTextbox").toggle("medium");
        }
    }

    /*
     * Method that allows users to update existing Form Inputs
     */
    handleUpdateFormInput(kind) {
        // Prepare HTTP API request data
        let requestData = {};
        requestData.viewsiteId = this.state.viewsiteId;
        requestData.viewpageId = this.state.viewpageId;
        requestData.elementId = this.state.element._id;
        requestData.kind = kind;
        // Continue preparing HTTP API request data based on Form Input kind
        // and hide update form after the update
        if (kind === "textbox") {
            let updateTextbox = this.state.textbox;
            requestData.formInputId = updateTextbox._id;
            requestData.textboxLabel = updateTextbox.textboxLabel;
            $(".updateTextbox").hide("medium");
        }
        // Call out to the API with a Form Input update request
        this.manageFormInputService.updateFormInput(requestData)
            .then((results) => {
                    // Set global Viewsite state to reflect changes
                    this.handleSetGlobalState(results.data, "viewsite");
                    // Follow up by clearing form state
                    this.handleClearLocalState();
                },
                (error) => {
                    // Handle errors
                    this.setState({
                        formInputSuccess: "",
                        formInputError: error.response.data
                    });
                });
    }

    /*
     * Method that allows users to delete existing Form Inputs
     */
    handleDeleteFormInput(event) {
        // Prepare HTTP API request data
        let requestData = {};
        requestData.formInputId = event._id;
        requestData.kind = event.kind;
        requestData.viewsiteId = this.state.viewsiteId;
        requestData.viewpageId = this.state.viewpageId;
        requestData.elementId = this.state.element._id;
        // Call out to API to request a Form Input to be deleted
        this.manageFormInputService.deleteFormInput(requestData)
            .then((results) => {
                    // Afterwards, update Global Viewsite state to reflect changes
                    this.handleSetGlobalState(results.data, "viewsite");
                },
                (error) => {
                    // Hande errors
                    this.setState({
                        formInputSuccess: "",
                        formInputError: error.response.data
                    });
                });
    }

    /*
     * Method used to hide all forms before showing another
     */
    handleHideAllForms(selector, isVisible) {
        // Sharply hide all create forms
        $(".createTextbox").hide(false);

        // Only hide update forms sharply if they are not the selector
        if (".updateTextbox" != selector) {
            $(".updateTextbox").hide(false);
        }

        // Smooth animation on the targeted selector
        if (isVisible) {
            $(selector).hide("medium");
        } else {
            $(selector).show("medium");
        }
    }

    /*
     * Method that clears local state so that new forms will not display old information
     */
    handleClearLocalState() {
        // Set state to default values
        let clearTextbox = this.state.textbox;
        clearTextbox._id = "";
        clearTextbox.kind = "textbox";
        clearTextbox.textboxLabel = "";
        this.setState({
            textbox: clearTextbox,
            formInputSuccess: "",
            formInputError: ""
        });
    }

    /*
     * Method that sets the Global state to reflect viewsite modifications
     * Passed down from Viewsite
     */
    handleSetGlobalState(newStateData, toSet) {
        this.props.onSetGlobalState(newStateData, toSet);
    }

    /*
     * Method to change state based on what a user types
     */
    handleChange(event, toChange) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        let changeProp = this.state[toChange];
        changeProp[name] = value;
        this.setState({
            [toChange]: changeProp
        });
    }

    /*
     * Method for updating the order of elements
     */
    handleSortableUpdate(event, ui) {
        // Get both the form input and form IDs and separate them
        let formInputAndFormIds = ui.item.attr("id").split(",");

        // Prepare request data
        let requestData = {};
        requestData.viewsiteId = this.state.viewsiteId;
        requestData.viewpageId = this.state.viewpageId;
        requestData.elementId = formInputAndFormIds[1];
        requestData.formInputId = formInputAndFormIds[0];
        requestData.sortOrder = ui.item.index();

        // Send out API request to update selected Element
        this.manageElementService.sortFormInputs(requestData)
            .then((results) => {
                    // Afterwards, set Global Viewsite state to reflect changes
                    this.handleSetGlobalState(results.data, "viewsite");
                },
                (error) => {
                    console.log(error);
                });
    }

    /*
     * React component lifecycle method that controls what happens before this
     * component receives props
     * Used to update Form appearance after a global state change
     */
    componentWillReceiveProps(nextProps) {
        // Set subsequent state values when component receives props
        this.setState({
            element: nextProps.element
        });
    }

    /*
     * React component lifecycle method that controls what happens before this
     * component mounts
     * Used to set Form fields based on Global state & hide create / update forms
     */
    componentDidMount() {
        // Set inital state values when component first mounts
        this.setState({
            viewsiteId: this.props.viewsiteId,
            viewpageId: this.props.viewpageId,
            element: this.props.element
        });
        // Hide forms when component first mounts
        this.handleHideAllForms();

        // Set up sortable
        $( ".formInputs-sortable" ).sortable({
            update: this.handleSortableUpdate,
            cursor: "move"
        });
    }

    /*
     * Render the Form JSX view
     */
    render() {
        return (FormJSX.call(this));
    }
}

// Export the Form
export default Form;
