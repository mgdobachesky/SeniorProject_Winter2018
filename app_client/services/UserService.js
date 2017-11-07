// Service for interacting with Users API
import axios from 'axios';

class UserService {
  // Read a user
  readOneUser(data) {
    axios.get('http://159.203.105.123:3000/api/v1/read_one/users', {
      request: data
    }).then(function(response) {
      console.log(response);
    }).catch(function(error) {
      console.log(error);
    });
  }

  // Create new user
  createUser(data) {
    axios.post('http://159.203.105.123:3000/api/v1/create/users', {
      request: data
    }).then(function(response) {
      console.log(response);
    }).catch(function(error) {
      console.log(error);
    });
  }
}
