// Service for interacting with API
import axios from 'axios';

class ViewsiteService {
  // Read one
  readOneViewsite(requestData) {
    return axios({
      url: '/read_one/viewsites/' + requestData.viewsiteName,
      method: 'get',
      baseURL: 'http://159.203.105.123:3000/api/v1/'
    });
  }

  // Read all
  readAllViewsites(requestData) {
    return axios({
      url: '/read_all/viewsites/' + requestData.userId,
      method: 'get',
      baseURL: 'http://159.203.105.123:3000/api/v1/'
    });
  }

  // Create
  createViewsite(requestData) {
    return axios({
      url: '/create/viewsites',
      method: 'post',
      baseURL: 'http://159.203.105.123:3000/api/v1/',
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
      baseURL: 'http://159.203.105.123:3000/api/v1/',
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
      baseURL: 'http://159.203.105.123:3000/api/v1/'
    });
  }
}

export default ViewsiteService;
