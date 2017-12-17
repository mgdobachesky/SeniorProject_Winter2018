// Service for interacting with API
import axios from 'axios';

// Import the location of the API
import { API_LOCATION } from 'Constants';

class ViewsiteService {
  // Read one
  readOneViewsiteByName(requestData) {
    return axios({
      url: '/read_one/viewsites/viewsiteName/' + requestData.viewsiteName,
      method: 'get',
      baseURL: API_LOCATION + '/api/v1/'
    });
  }
}

export default ViewsiteService;
