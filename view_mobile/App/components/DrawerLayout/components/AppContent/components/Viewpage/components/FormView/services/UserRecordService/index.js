// Service for interacting with API
import axios from 'axios';

class UserRecordService {
  // Create
  createUserRecord(requestData) {
    return axios({
      url: '/create/user_records',
      method: 'post',
      baseURL: 'http://159.203.105.123:3000/api/v1/',
      headers: {
        'Content-Type': 'application/json'
      },
      data: {
        "viewsiteId": requestData.viewsiteId,
        "elementId": requestData.elementId,
        "record": requestData.record
      }
    });
  }

  // Update
  updateUserRecord(requestData) {
    return axios({
      url: '/update/user_records',
      method: 'put',
      baseURL: 'http://159.203.105.123:3000/api/v1/',
      headers: {
        'Content-Type': 'application/json'
      },
      data: {
        "viewsiteId": requestData.viewsiteId,
        "elementId": requestData.elementId,
        "recordId": requestData.recordId,
        "record": requestData.record
      }
    });
  }

  // Delete
  deleteUserRecord(requestData) {
    return axios({
      url: '/delete/user_records',
      method: 'delete',
      baseURL: 'http://159.203.105.123:3000/api/v1/',
      headers: {
        'Content-Type': 'application/json'
      },
      data: {
        "viewsiteId": requestData.viewsiteId,
        "elementId": requestData.elementId,
        "recordId": requestData.recordId
      }
    });
  }
}

export default UserRecordService;
