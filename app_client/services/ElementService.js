// Service for interacting with API
import axios from 'axios';

class ElementService {
  // Read one
  readOneElement(requestData) {
    return axios({
      url: '/read_one/elements',
      method: 'get',
      baseURL: 'http://159.203.105.123:3000/api/v1/',
      params: {
        'elementId': requestData.elementId
      }
    });
  }

  // Read all
  readAllElements(requestData) {
    return axios({
      url: '/read_all/elements',
      method: 'get',
      baseURL: 'http://159.203.105.123:3000/api/v1/',
      params: {
        'viewpageId': requestData.viewpageId
      }
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
      url: '/update/elements',
      method: 'put',
      baseURL: 'http://159.203.105.123:3000/api/v1/',
      headers: {
        'Content-Type': 'application/json'
      },
      params: {
        'elementId': requestData.elementId
      },
      data: {
        'elementValue': requestData.elementValue
      }
    });
  }

  // Delete
  deleteElement {
    return axios({
      url: '/delete/elements',
      method: 'delete',
      baseURL: 'http://159.203.105.123:3000/api/v1/',
      params: {
        'elementId': requestData.elementId
      }
    });
  }
}

export default ElementService;
