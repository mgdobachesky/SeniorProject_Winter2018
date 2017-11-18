// Service for interacting with API
import axios from 'axios';

// Import required modules
import ServiceOptions from './ServiceOptions';

class TextService extends ServiceOptions {
  // Read one
  readOneText(requestData) {
    return axios({
      url: '/read_one/text/' + requestData.textId,
      method: 'get',
      baseURL: super.getRequestLocation() + '/api/v1/'
    });
  }

  // Create
  createText(requestData) {
    return axios({
      url: '/create/text/' + requestData.elementId,
      method: 'post',
      baseURL: super.getRequestLocation() + '/api/v1/',
      headers: {
        'Content-Type': 'application/json'
      },
      data: {
        'textValue': requestData.textValue
      }
    });
  }

  // Update
  updateText(requestData) {
    return axios({
      url: '/update/text/' + requestData.textId,
      method: 'put',
      baseURL: super.getRequestLocation() + '/api/v1/',
      headers: {
        'Content-Type': 'application/json'
      },
      data: {
        'textValue': requestData.textValue
      }
    });
  }

  // Delete
  deleteText(requestData) {
    return axios({
      url: '/delete/text/' + requestData.textId,
      method: 'delete',
      baseURL: super.getRequestLocation() + '/api/v1/'
    });
  }
}

export default TextService;
