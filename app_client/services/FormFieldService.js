// Service for interacting with API
import axios from 'axios';

class FormFieldService {
  // Read one
  readOneFormField(requestData) {
    return axios({
      url: '/read_one/form_fields/' + requestData.formFieldId,
      method: 'get',
      baseURL: 'http://159.203.105.123:3000/api/v1/'
    });
  }

  // Read all
  readAllFormFields(requestData) {
    return axios({
      url: '/read_all/form_fields/' + requestData.formId,
      method: 'get',
      baseURL: 'http://159.203.105.123:3000/api/v1/'
    });
  }

  // Create
  createFormField(requestData) {
    return axios({
      url: '/create/form_fields',
      method: 'post',
      baseURL: 'http://159.203.105.123:3000/api/v1/',
      headers: {
        'Content-Type': 'application/json'
      },
      data: {
        'formId': requestData.formId,
        'formFieldType': requestData.formFieldType,
        'formFieldLabel': requestData.formFieldLabel,
        'formFieldValue': requestData.formFieldValue
      }
    });
  }

  // Update
  updateFormField(requestData) {
    return axios({
      url: '/update/form_fields/' + requestData.formFieldId,
      method: 'put',
      baseURL: 'http://159.203.105.123:3000/api/v1/',
      headers: {
        'Content-Type': 'application/json'
      },
      data: {
        'formFieldLabel': requestData.formFieldLabel,
        'formFieldValue': requestData.formFieldValue
      }
    });
  }

  // Delete
  deleteFormField(requestData) {
    return axios({
      url: '/delete/form_fields/' + requestData.formFieldId,
      method: 'delete',
      baseURL: 'http://159.203.105.123:3000/api/v1/'
    });
  }
}

export default FormFieldService;
