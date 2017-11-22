// Service for interacting with API
import axios from 'axios';

// Import the location of the API
import { API_LOCATION } from 'Constants';

class TextService {
  // Read one
  readOneText(requestData) {
    return axios({
      url: '/read_one/text/' + requestData.textId,
      method: 'get',
      baseURL: API_LOCATION + '/api/v1/'
    });
  }

  // Read all
  readAllText(requestData) {
    return axios({
      url: '/read_all/text/' + requestData.viewpageId,
      method: 'get',
      baseURL: API_LOCATION + '/api/v1/'
    });
  }

  // Create
  createText(requestData) {
    return axios({
      url: '/create/text/',
      method: 'post',
      baseURL: API_LOCATION + '/api/v1/',
      headers: {
        'Content-Type': 'application/json'
      },
      data: {
        'viewpageId': requestData.viewpageId,
        'textValue': requestData.textValue
      }
    });
  }

  // Update
  updateText(requestData) {
    return axios({
      url: '/update/text/' + requestData.textId,
      method: 'put',
      baseURL: API_LOCATION + '/api/v1/',
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
      baseURL: API_LOCATION + '/api/v1/'
    });
  }
}

export default TextService;
