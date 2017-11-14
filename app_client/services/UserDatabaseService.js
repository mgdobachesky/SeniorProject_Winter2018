// Service for interacting with API
import axios from 'axios';

// Import required modules
import ServiceOptions from './ServiceOptions';

class UserDatabaseService extends ServiceOptions {
  // Read one
  readOneUserRecord(requestData) {
    return axios({
      url: '/read_one/user_records/' + requestData.recordId,
      method: 'get',
      baseURL: super.getRequestLocation() + '/api/v1/'
    });
  }

  // Read all
  readAllUserRecords(requestData) {
    return axios({
      url: '/read_all/user_records/' + requestData.formId,
      method: 'get',
      baseURL: super.getRequestLocation() + '/api/v1/'
    });
  }

  // Create
  createUserRecord(requestData) {
    return axios({
      url: '/create/user_records/' + requestData.formId,
      method: 'post',
      baseURL: super.getRequestLocation() + '/api/v1/',
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
      baseURL: super.getRequestLocation() + '/api/v1/',
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
      baseURL: super.getRequestLocation() + '/api/v1/'
    });
  }
}

export default UserDatabaseService;
