// Service for interacting with API
import axios from 'axios';

// Import the location of the API
import { API_LOCATION } from 'Constants';

class UserService {
  // Read One
  readOneUser(requestData) {
    return axios({
      url: '/read_one/users',
      method: 'get',
      baseURL: API_LOCATION + '/api/v1/'
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
      url: '/update/users',
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
      url: '/delete/users',
      method: 'delete',
      baseURL: API_LOCATION + '/api/v1/',
    });
  }

  // Login
  loginUser(requestData) {
    return axios({
      url: '/login/users',
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

  // logout
  logoutUser(requestData) {
    return axios({
      url: '/logout/users/',
      method: 'get',
      baseURL: API_LOCATION + '/api/v1/'
    });
  }
}

export default UserService;
