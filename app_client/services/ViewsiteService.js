// Service for interacting with API
import axios from 'axios';

// Import required modules
import ServiceOptions from './ServiceOptions';

class ViewsiteService extends ServiceOptions {
  // Read one
  readOneViewsite(requestData) {
    return axios({
      url: '/read_one/viewsites/' + requestData.viewsiteName,
      method: 'get',
      baseURL: super.getRequestLocation() + '/api/v1/'
    });
  }

  // Read all
  readAllViewsites(requestData) {
    return axios({
      url: '/read_all/viewsites/' + requestData.userId,
      method: 'get',
      baseURL: super.getRequestLocation() + '/api/v1/'
    });
  }

  // Create
  createViewsite(requestData) {
    return axios({
      url: '/create/viewsites',
      method: 'post',
      baseURL: super.getRequestLocation() + '/api/v1/',
      headers: {
        'Content-Type': 'application/json'
      },
      data: {
        'userId': requestData.userId,
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
      baseURL: super.getRequestLocation() + '/api/v1/',
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
      baseURL: super.getRequestLocation() + '/api/v1/'
    });
  }

  // Exists
  existsViewsite(requestData) {
    return axios({
      url: '/exists/viewsites/' + requestData.viewsiteName,
      method: 'get',
      baseURL: super.getRequestLocation() + '/api/v1/'
    });
  }
}

export default ViewsiteService;
