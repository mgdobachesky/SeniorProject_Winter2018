// Service for interacting with API
import axios from 'axios';

class ViewpageService {
  // Read one
  readOneViewpage(requestData) {
    return axios({
      url: '/read_one/viewpages',
      method: 'get',
      baseURL: 'http://159.203.105.123:3000/api/v1/',
      params: {
        'viewpageId': requestData.viewpageId
      }
    });
  }

  // Read all
  readAllViewpages(requestData) {
    return axios({
      url: '/read_all/viewpages',
      method: 'get',
      baseURL: 'http://159.203.105.123:3000/api/v1/',
      params: {
        'viewsiteId': requestData.viewsiteId
      }
    });
  }

  // Create
  createViewpage(requestData) {
    return axios({
      url: '/create/viewpages',
      method: 'post',
      baseURL: 'http://159.203.105.123:3000/api/v1/',
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
      url: '/update/viewpages',
      method: 'put',
      baseURL: 'http://159.203.105.123:3000/api/v1/',
      headers: {
        'Content-Type': 'application/json'
      },
      params: {
        'viewpageId': requestData.viewpageId
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
      url: '/delete/viewpages',
      method: 'delete',
      baseURL: 'http://159.203.105.123:3000/api/v1/',
      params: {
        'viewpageId': requestData.viewpageId
      }
    });
  }
}

export default ViewpageService;
