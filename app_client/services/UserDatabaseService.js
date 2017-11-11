// Service for interacting with API
import axios from 'axios';

class UserDatabaseService {
  // Read one
  readOneUserRecord(requestData) {
    return axios({
      url: '/read_one/user_records',
      method: 'get',
      baseURL: 'http://159.203.105.123:3000/api/v1/',
      params: {
        'recordId': requestData.recordId
      }
    });
  }

  // Read all
  readAllUserRecords(requestData) {
    return axios({
      url: '/read_all/user_records',
      method: 'get',
      baseURL: 'http://159.203.105.123:3000/api/v1/',
      params: {
        'formId': requestData.formId
      }
    });
  }

  // Create
  createUserRecord(requestData) {
    return axios({
      url: '/create/user_records',
      method: 'post',
      baseURL: 'http://159.203.105.123:3000/api/v1/',
      headers: {
        'Content-Type': 'application/json'
      },
      params: {
        'formId': requestData.formId
      },
      data: {
        requestData.record
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
      params: {
        'recordId': requestData.recordId
      },
      data: {
        requestData.record
      }
    });
  }

  // Delete
  deleteUserRecord(requestData) {
    return axios({
      url: '/delete/user_records',
      method: 'delete',
      baseURL: 'http://159.203.105.123:3000/api/v1/',
      params: {
        'recordId': requestData.recordId
      }
    });
  }
}

export default UserDatabaseService;
