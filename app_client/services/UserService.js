// Service for interacting with Users API
import axios from 'axios';

class UserService {
  // Read a user
  readOneUser(data) {
    return axios({
      url: '/read_one/users',
      method: 'post',
      baseURL: 'http://159.203.105.123:3000/api/v1/',
      headers: {
        'Content-Type': 'application/json'
      },
      data: {
        'username': data.username,
        'password': data.password
      }
    });
  }

  // Create new user
  createUser(data) {
    return axios({
      url: '/create/users',
      method: 'post',
      baseURL: 'http://159.203.105.123:3000/api/v1/',
      headers: {
        'Content-Type': 'application/json'
      },
      data: {
        'username': data.username,
        'password': data.password
      }
    });
  }
}

export default UserService;
