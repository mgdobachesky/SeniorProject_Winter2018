// Service for interacting with API
import axios from 'axios';

class ElementService {
  // Read one
  readOneElement(requestData) {
    return axios({
      url: '/read_one/elements/' + requestData.elementId,
      method: 'get',
      baseURL: 'http://159.203.105.123:3000/api/v1/'
    });
  }

  // Read all
  readAllElements(requestData) {
    return axios({
      url: '/read_all/elements/' + requestData.viewpageId,
      method: 'get',
      baseURL: 'http://159.203.105.123:3000/api/v1/'
    });
  }

  // Create
  createElement(requestData) {
    return axios({
      url: '/create/elements',
      method: 'post',
      baseURL: 'http://159.203.105.123:3000/api/v1/',
      headers: {
        'Content-Type': 'application/json'
      },
      data: {
        'viewpageId': requestData.viewpageId,
        'elementType': requestData.elementType,
        'elementValue': requestData.elementValue
      }
    });
  }

  // Update
  updateElement(requestData) {
    return axios({
      url: '/update/elements/' + requestData.elementId,
      method: 'put',
      baseURL: 'http://159.203.105.123:3000/api/v1/',
      headers: {
        'Content-Type': 'application/json'
      },
      data: {
        'elementValue': requestData.elementValue
      }
    });
  }

  // Delete
  deleteElement {
    return axios({
      url: '/delete/elements/' + requestData.elementId,
      method: 'delete',
      baseURL: 'http://159.203.105.123:3000/api/v1/'
    });
  }
}

export default ElementService;
