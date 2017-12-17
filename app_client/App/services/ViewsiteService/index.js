// Service for interacting with API
import axios from 'axios';

// Import the location of the API
import { API_LOCATION } from 'Constants';

class ViewsiteService {
  // Read one
  readOneViewsiteByName(requestData) {
    return axios({
      url: '/read_one/viewsites/viewsiteName' + requestData.viewsiteName,
      method: 'get',
      baseURL: API_LOCATION + '/api/v1/'
    });
  }

  readOneViewsiteById(requestData) {
    return axios({
      url: '/read_one/viewsites/viewsiteId/' + requestData.viewsiteId,
      method: 'get',
      baseURL: API_LOCATION + '/api/v1/'
    });
  }

  // Read all
  readAllViewsites(requestData) {
    return axios({
      url: '/read_all/viewsites',
      method: 'get',
      baseURL: API_LOCATION + '/api/v1/'
    });
  }

  // Create
  createViewsite(requestData) {
    return axios({
      url: '/create/viewsites',
      method: 'post',
      baseURL: API_LOCATION + '/api/v1/',
      headers: {
        'Content-Type': 'application/json'
      },
      data: {
        'viewsiteName': requestData.viewsiteName,
        'loginEnabled': requestData.loginEnabled
      }
    });
  }

  // Update
  updateViewsite(requestData) {
    return axios({
      url: '/update/viewsites/' + requestData.viewsiteId,
      method: 'put',
      baseURL: API_LOCATION + '/api/v1/',
      headers: {
        'Content-Type': 'application/json'
      },
      data: {
        'viewsiteName': requestData.viewsiteName,
        'loginEnabled': requestData.loginEnabled
      }
    });
  }

  // Delete
  deleteViewsite(requestData) {
    return axios({
      url: '/delete/viewsites/' + requestData.viewsiteId,
      method: 'delete',
      baseURL: API_LOCATION + '/api/v1/'
    });
  }
}

export default ViewsiteService;
