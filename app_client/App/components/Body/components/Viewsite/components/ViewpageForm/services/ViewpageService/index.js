// Service for interacting with API
import axios from 'axios';

// Import the location of the API
import { API_LOCATION } from 'Constants';

class ViewpageService {
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
      url: '/update/viewpages',
      method: 'put',
      baseURL: API_LOCATION + '/api/v1/',
      headers: {
        'Content-Type': 'application/json'
      },
      data: {
        "viewsiteId": requestData.viewsiteId,
        "viewpageId": requestData.viewpageId,
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
      baseURL: API_LOCATION + '/api/v1/',
      headers: {
        'Content-Type': 'application/json'
      },
      data: {
        "viewsiteId": requestData.viewsiteId,
        "viewpageId": requestData.viewpageId
      }
    });
  }
}

export default ViewpageService;
