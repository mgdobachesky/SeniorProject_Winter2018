// Service for interacting with API
import axios from 'axios';

class FormService {
  // Read one
  readOneForm(requestData) {
    return axios({
      url: '/read_one/forms',
      method: 'get',
      baseURL: 'http://159.203.105.123:3000/api/v1/',
      params: {
        'formId': requestData.formId
      }
    });
  }

  // Read all
  readAllForms(requestData) {
    return axios({
      url: '/read_all/forms',
      method: 'get',
      baseURL: 'http://159.203.105.123:3000/api/v1/',
      params: {
        'viewsiteId': requestData.viewsiteId
      }
    });
  }

  // Create
  createForm(requestData) {
    return axios({
      url: '/create/forms',
      method: 'post',
      baseURL: 'http://159.203.105.123:3000/api/v1/',
      headers: {
        'Content-Type': 'application/json'
      },
      data: {
        'viewsiteId': requestData.viewsiteId,
        'formTitle': requestData.formTitle
      }
    });
  }

  // Update
  updateForm(requestData) {
    return axios({
      url: '/update/forms',
      method: 'put',
      baseURL: 'http://159.203.105.123:3000/api/v1/',
      headers: {
        'Content-Type': 'application/json'
      },
      params: {
        'formId': requestData.formId
      },
      data: {
        'formTitle': requestData.formTitle
      }
    });
  }

  // Delete
  deleteForm(requestData) {
    return axios({
      url: '/delete/forms',
      method: 'delete',
      baseURL: 'http://159.203.105.123:3000/api/v1/',
      params: {
        'formId': requestData.formId
      }
    });
  }
}

export default FormService;
