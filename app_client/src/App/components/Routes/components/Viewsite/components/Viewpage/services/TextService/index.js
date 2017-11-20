// Service for interacting with API
import axios from 'axios';

class TextService {
  // Read one
  readOneText(requestData) {
    return axios({
      url: '/read_one/text/' + requestData.textId,
      method: 'get',
      baseURL: 'http://159.203.105.123:3000/api/v1/'
    });
  }

  // Read all
  readAllText(requestData) {
    return axios({
      url: '/read_all/text/' + requestData.viewpageId,
      method: 'get',
      baseURL: 'http://159.203.105.123:3000/api/v1/'
    });
  }

  // Create
  createText(requestData) {
    return axios({
      url: '/create/text/',
      method: 'post',
      baseURL: 'http://159.203.105.123:3000/api/v1/',
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
      baseURL: 'http://159.203.105.123:3000/api/v1/',
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
      baseURL: 'http://159.203.105.123:3000/api/v1/'
    });
  }
}

export default TextService;
