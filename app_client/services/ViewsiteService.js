// Service for interacting with API
import axios from 'axios';

class ViewsiteService {
  // Read one
  readOneViewsite(requestData) {
    return axios({
      url: '/read_one/viewsites',
      method: 'get',
      baseURL: 'http://159.203.105.123:3000/api/v1/',
      params: {
        'viewsiteName': requestData.viewsiteName
      }
    });
  }

  // Read all
  readAllViewsites(requestData) {
    return axios({
      url: '/read_all/viewsites',
      method: 'get',
      baseURL: 'http://159.203.105.123:3000/api/v1/',
      params: {
        'userId': requestData.userId
      }
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
      url: '/update/viewsites',
      method: 'put',
      baseURL: 'http://159.203.105.123:3000/api/v1/',
      headers: {
        'Content-Type': 'application/json'
      },
      params: {
        'viewsiteId': requestData.viewsiteId
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
      url: '/delete/viewsites',
      method: 'delete',
      baseURL: 'http://159.203.105.123:3000/api/v1/',
      params: {
        'viewsiteId': requestData.viewsiteId
      }
    });
  }
}

export default ViewsiteService;
