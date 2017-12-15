// Service for interacting with API
import axios from 'axios';

// Import the location of the API
import { API_LOCATION } from 'Constants';

class ViewpageService {
  // Read one
  readOneViewpage(requestData) {
    return axios({
      url: '/read_one/viewpages/' + requestData.viewpageId,
      method: 'get',
      baseURL: API_LOCATION + '/api/v1/'
    });
  }

  // Read all
  readAllViewpages(requestData) {
    return axios({
      url: '/read_all/viewpages/' + requestData.viewsiteId,
      method: 'get',
      baseURL: API_LOCATION + '/api/v1/'
    });
  }

  // Create
  createViewpage(requestData) {
    return axios({
      url: '/create/viewpages',
      method: 'post',
      baseURL: API_LOCATION + '/api/v1/',
      headers: {
        'Content-Type': 'application/json'
      },
      data: {
        'viewsiteId': requestData.viewsiteId,
        'viewpageName': requestData.viewpageName,
        'permissionLevel': requestData.permissionLevel
      }
    });
  }

  // Update
  updateViewpage(requestData) {
    return axios({
      url: '/update/viewpages/' + requestData.viewpageId,
      method: 'put',
      baseURL: API_LOCATION + '/api/v1/',
      headers: {
        'Content-Type': 'application/json'
      },
      data: {
        'viewpageName': requestData.viewpageName,
        'permissionLevel': requestData.permissionLevel
      }
    });
  }

  // Delete
  deleteViewpage(requestData) {
    return axios({
      url: '/delete/viewpages/' + requestData.viewpageId,
      method: 'delete',
      baseURL: API_LOCATION + '/api/v1/'
    });
  }
}

export default ViewpageService;
