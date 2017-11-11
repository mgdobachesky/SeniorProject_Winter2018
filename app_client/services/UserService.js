// Service for interacting with API
import axios from 'axios';

class UserService {
  // Read one
  readOneUser(requestData) {
    return axios({
      url: '/read_one/users',
      method: 'post',
      baseURL: 'http://159.203.105.123:3000/api/v1/',
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
      baseURL: 'http://159.203.105.123:3000/api/v1/',
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
      baseURL: 'http://159.203.105.123:3000/api/v1/',
      headers: {
        'Content-Type': 'application/json'
      },
      params: {
        'userId': requestData.userId
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
      baseURL: 'http://159.203.105.123:3000/api/v1/',
      params: {
        'userId': requestData.userId
      }
    });
  }
}

export default UserService;
