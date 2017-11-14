// Service for interacting with API
import axios from 'axios';

// Import required modules
import ServiceOptions from './ServiceOptions';

class UserService extends ServiceOptions {
  // Read one
  readOneUser(requestData) {
    return axios({
      url: '/read_one/users',
      method: 'post',
      baseURL: super.getRequestLocation() + '/api/v1/',
      headers: {
        'Content-Type': 'application/json'
      },
      data: {
        'username': requestData.username,
        'password': requestData.password
      }
    });
  }

  // Create
  createUser(requestData) {
    return axios({
      url: '/create/users',
      method: 'post',
      baseURL: super.getRequestLocation() + '/api/v1/',
      headers: {
        'Content-Type': 'application/json'
      },
      data: {
        'username': requestData.username,
        'password': requestData.password
      }
    });
  }

  // Update
  updateUser(requestData) {
    return axios({
      url: '/update/users/' + requestData.userId,
      method: 'put',
      baseURL: super.getRequestLocation() + '/api/v1/',
      headers: {
        'Content-Type': 'application/json'
      },
      data: {
        'username': requestData.username,
        'password': requestData.password
      }
    });
  }

  // Delete
  deleteUser(requestData) {
    return axios({
      url: '/delete/users/' + requestData.userId,
      method: 'delete',
      baseURL: super.getRequestLocation() + '/api/v1/',
    });
  }
}

export default UserService;
