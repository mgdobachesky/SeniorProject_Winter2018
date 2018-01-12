// Include required modules
import axios from 'axios';

// Import the API location
import { API_LOCATION } from 'Constants';

class UserDatabaseService {
  /*
   * HTTP call used to read a User Database
   */
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

// Export the HTTP service
export default UserDatabaseService;
