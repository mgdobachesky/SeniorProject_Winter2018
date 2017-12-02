// Service for interacting with API
import axios from 'axios';

// Import the location of the API
import { API_LOCATION } from 'Constants';

class ViewpageService {
  // Read one
  readOneViewpage(requestData) {
    return axios({
      url: '/read_one/viewpages/' + requestData.viewpageId,
      method: 'get',
      baseURL: API_LOCATION + '/api/v1/'
    });
  }

  // Read all
  readAllViewpages(requestData) {
    return axios({
      url: '/read_all/viewpages/' + requestData.viewsiteId,
      method: 'get',
      baseURL: API_LOCATION + '/api/v1/'
    });
  }

}

export default ViewpageService;
