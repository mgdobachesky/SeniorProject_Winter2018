// Service for interacting with API
import axios from 'axios';

class ViewpageService {
  // Read one
  readOneViewpage(requestData) {
    return axios({
      url: '/read_one/viewpages/' + requestData.viewpageId,
      method: 'get',
      baseURL: 'http://159.203.105.123:3000/api/v1/'
    });
  }

  // Read all
  readAllViewpages(requestData) {
    return axios({
      url: '/read_all/viewpages/' + requestData.viewsiteId,
      method: 'get',
      baseURL: 'http://159.203.105.123:3000/api/v1/'
    });
  }
}

export default ViewpageService;
