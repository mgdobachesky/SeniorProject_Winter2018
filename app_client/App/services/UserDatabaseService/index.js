// Service for interacting with API
import axios from 'axios';

// Import the location of the API
import { API_LOCATION } from 'Constants';

class UserDatabaseService {
  // Read one
  readOneUserDatabase(requestData) {
    return axios({
      url: '/read_one/user_databases',
      method: 'post',
      baseURL: API_LOCATION + '/api/v1/',
      headers: {
        'Content-Type': 'application/json'
      },
      data: {
        "viewsiteId": requestData.viewsiteId
      }
    });
  }
}

export default UserDatabaseService;
