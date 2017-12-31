// Include required modules
import axios from 'axios';

class UserDatabaseService {
  /*
   * HTTP call used to read a User Database
   */
  readOneUserDatabase(requestData) {
    return axios({
      url: '/read_one/user_databases',
      method: 'post',
      baseURL: 'http://159.203.105.123:3000/api/v1/',
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
