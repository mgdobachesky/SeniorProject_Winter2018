// Service for interacting with API
import axios from 'axios';

// Import the location of the API
import { API_LOCATION } from 'Constants';

class UserDatabaseService {
  // Read one
  readOneUserRecord(requestData) {
    return axios({
      url: '/read_one/user_records/' + requestData.recordId,
      method: 'get',
      baseURL: API_LOCATION + '/api/v1/'
    });
  }

  // Read all
  readAllUserRecords(requestData) {
    return axios({
      url: '/read_all/user_records/' + requestData.formId,
      method: 'get',
      baseURL: API_LOCATION + '/api/v1/'
    });
  }

  // Create
  createUserRecord(requestData) {
    return axios({
      url: '/create/user_records/' + requestData.formId,
      method: 'post',
      baseURL: API_LOCATION + '/api/v1/',
      headers: {
        'Content-Type': 'application/json'
      },
      data: {
        requestData.record
      }
    });
  }

  // Update
  updateUserRecord(requestData) {
    return axios({
      url: '/update/user_records/' + requestData.recordId,
      method: 'put',
      baseURL: API_LOCATION + '/api/v1/',
      headers: {
        'Content-Type': 'application/json'
      },
      data: {
        requestData.record
      }
    });
  }

  // Delete
  deleteUserRecord(requestData) {
    return axios({
      url: '/delete/user_records/' + requestData.recordId,
      method: 'delete',
      baseURL: API_LOCATION + '/api/v1/'
    });
  }
}

export default UserDatabaseService;
