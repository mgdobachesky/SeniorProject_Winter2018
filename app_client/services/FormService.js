// Service for interacting with API
import axios from 'axios';

// Import required modules
import ServiceOptions from './ServiceOptions';

class FormService extends ServiceOptions {
  // Read one
  readOneForm(requestData) {
    return axios({
      url: '/read_one/forms/' + requestData.formId,
      method: 'get',
      baseURL: super.getRequestLocation() + '/api/v1/'
    });
  }

  // Read all
  readAllForms(requestData) {
    return axios({
      url: '/read_all/forms/' + requestData.viewsiteId,
      method: 'get',
      baseURL: super.getRequestLocation() + '/api/v1/'
    });
  }

  // Create
  createForm(requestData) {
    return axios({
      url: '/create/forms',
      method: 'post',
      baseURL: super.getRequestLocation() + '/api/v1/',
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
      url: '/update/forms/' + requestData.formId,
      method: 'put',
      baseURL: super.getRequestLocation() + '/api/v1/',
      headers: {
        'Content-Type': 'application/json'
      },
      data: {
        'formTitle': requestData.formTitle
      }
    });
  }

  // Delete
  deleteForm(requestData) {
    return axios({
      url: '/delete/forms/' + requestData.formId,
      method: 'delete',
      baseURL: super.getRequestLocation() + '/api/v1/'
    });
  }
}

export default FormService;
