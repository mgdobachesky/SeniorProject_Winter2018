// Service for interacting with API
import axios from 'axios';

// Import the location of the API
import { API_LOCATION } from 'Constants';

class FormInputService {
  // Create
  createFormInput(requestData) {
    // Prepare data for API call
    var prepareData = {};
    prepareData.viewsiteId = requestData.viewsiteId;
    prepareData.viewpageId = requestData.viewpageId;
    prepareData.elementId = requestData.elementId;
    prepareData.kind = requestData.kind;
    // Finish preparing data based on the child class
    if(requestData.kind === "textbox") {
      prepareData.textboxLabel = requestData.textboxLabel;
    }

    // Make API call
    return axios({
      url: '/create/form_inputs',
      method: 'post',
      baseURL: API_LOCATION + '/api/v1/',
      headers: {
        'Content-Type': 'application/json'
      },
      data: prepareData
    });
  }

  // Update
  updateFormInput(requestData) {
    // Prepare data for API call
    var prepareData = {};
    prepareData.viewsiteId = requestData.viewsiteId;
    prepareData.viewpageId = requestData.viewpageId;
    prepareData.elementId = requestData.elementId;
    prepareData.formInputId = requestData.formInputId;
    prepareData.kind = requestData.kind;
    // Finish preparing data based on the child class
    if(requestData.kind === "textbox") {
      prepareData.textboxLabel = requestData.textboxLabel;
    }

    // Make API call
    return axios({
      url: '/update/form_inputs',
      method: 'put',
      baseURL: API_LOCATION + '/api/v1/',
      headers: {
        'Content-Type': 'application/json'
      },
      data: prepareData
    });
  }

  // Delete
  deleteFormInput(requestData) {
    return axios({
      url: '/delete/form_inputs',
      method: 'delete',
      baseURL: API_LOCATION + '/api/v1/',
      headers: {
        'Content-Type': 'application/json'
      },
      data: {
        'viewsiteId': requestData.viewsiteId,
        'viewpageId': requestData.viewpageId,
        'elementId': requestData.elementId,
        'formInputId': requestData.formInputId,
        'kind': requestData.kind
      }
    });
  }
}

export default FormInputService;
