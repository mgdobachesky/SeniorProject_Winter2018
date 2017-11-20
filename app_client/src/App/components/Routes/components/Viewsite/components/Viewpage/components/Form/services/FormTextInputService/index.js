// Service for interacting with API
import axios from 'axios';

class FormTextInputService {
  // Read one
  readOneFormTextInput(requestData) {
    return axios({
      url: '/read_one/form_text_inputs/' + requestData.formTextInputId,
      method: 'get',
      baseURL: 'http://159.203.105.123:3000/api/v1/'
    });
  }

  // Read all
  readAllFormTextInputs(requestData) {
    return axios({
      url: '/read_all/form_text_inputs/' + requestData.formId,
      method: 'get',
      baseURL: 'http://159.203.105.123:3000/api/v1/'
    });
  }

  // Create
  createFormTextInput(requestData) {
    return axios({
      url: '/create/form_text_inputs',
      method: 'post',
      baseURL: 'http://159.203.105.123:3000/api/v1/',
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
      baseURL: 'http://159.203.105.123:3000/api/v1/',
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
      baseURL: 'http://159.203.105.123:3000/api/v1/'
    });
  }
}

export default FormTextInputService;
