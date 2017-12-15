// Service for interacting with API
import axios from 'axios';

// Import the location of the API
import { API_LOCATION } from 'Constants';

class FormTextInputService {
  // Read one
  readOneFormTextInput(requestData) {
    return axios({
      url: '/read_one/form_text_inputs/' + requestData.formTextInputId,
      method: 'get',
      baseURL: API_LOCATION + '/api/v1/'
    });
  }

  // Read all
  readAllFormTextInputs(requestData) {
    return axios({
      url: '/read_all/form_text_inputs/' + requestData.formId,
      method: 'get',
      baseURL: API_LOCATION + '/api/v1/'
    });
  }

  // Create
  createFormTextInput(requestData) {
    return axios({
      url: '/create/form_text_inputs',
      method: 'post',
      baseURL: API_LOCATION + '/api/v1/',
      headers: {
        'Content-Type': 'application/json'
      },
      data: {
        'formId': requestData.formId,
        'formTextInputLabel': requestData.formTextInputLabel
      }
    });
  }

  // Update
  updateFormTextInput(requestData) {
    return axios({
      url: '/update/form_text_inputs/' + requestData.formTextInputId,
      method: 'put',
      baseURL: API_LOCATION + '/api/v1/',
      headers: {
        'Content-Type': 'application/json'
      },
      data: {
        'formTextInputLabel': requestData.formTextInputLabel
      }
    });
  }

  // Delete
  deleteFormTextInput(requestData) {
    return axios({
      url: '/delete/form_text_inputs/' + requestData.formTextInputId,
      method: 'delete',
      baseURL: API_LOCATION + '/api/v1/'
    });
  }
}

export default FormTextInputService;
