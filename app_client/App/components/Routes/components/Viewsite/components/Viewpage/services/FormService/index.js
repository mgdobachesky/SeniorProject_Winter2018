// Service for interacting with API
import axios from 'axios';

// Import the location of the API
import { API_LOCATION } from 'Constants';

class FormService {
  // Read one
  readOneForm(requestData) {
    return axios({
      url: '/read_one/forms/' + requestData.formId,
      method: 'get',
      baseURL: API_LOCATION + '/api/v1/'
    });
  }

  // Read all
  readAllFormsByViewsite(requestData) {
    return axios({
      url: '/read_all/forms/viewsite/' + requestData.viewsiteId,
      method: 'get',
      baseURL: API_LOCATION + '/api/v1/'
    });
  }

  readAllFormsByViewpage(requestData) {
    return axios({
      url: '/read_all/forms/viewpage/' + requestData.viewpageId,
      method: 'get',
      baseURL: API_LOCATION + '/api/v1/'
    });
  }

  // Create
  createForm(requestData) {
    return axios({
      url: '/create/forms/',
      method: 'post',
      baseURL: API_LOCATION + '/api/v1/',
      headers: {
        'Content-Type': 'application/json'
      },
      data: {
        'viewsiteId': requestData.viewsiteId,
        'viewpageId': requestData.viewpageId,
        'formTitle': requestData.formTitle
      }
    });
  }

  // Update
  updateForm(requestData) {
    return axios({
      url: '/update/forms/' + requestData.formId,
      method: 'put',
      baseURL: API_LOCATION + '/api/v1/',
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
      baseURL: API_LOCATION + '/api/v1/'
    });
  }
}

export default FormService;
