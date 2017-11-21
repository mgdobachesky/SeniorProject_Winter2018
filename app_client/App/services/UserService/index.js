// Service for interacting with API
import axios from 'axios';

// Import the location of the API
import { API_LOCATION } from 'Constants';

class UserService {
  // Read one
  readOneUser(requestData) {
    return axios({
      url: '/read_one/users',
      method: 'post',
      baseURL: API_LOCATION + '/api/v1/',
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
      baseURL: API_LOCATION + '/api/v1/',
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
      baseURL: API_LOCATION + '/api/v1/',
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
      baseURL: API_LOCATION + '/api/v1/',
    });
  }

  // Exists
  existsUser(requestData) {
    return axios({
      url: '/exists/users/' + requestData.username,
      method: 'get',
      baseURL: API_LOCATION + '/api/v1/'
    });
  }
}

export default UserService;
