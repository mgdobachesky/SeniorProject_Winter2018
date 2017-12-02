// Service for interacting with API
import axios from 'axios';

// Import the location of the API
import { API_LOCATION } from 'Constants';

class TextService {
  // Read one
  readOneText(requestData) {
    return axios({
      url: '/read_one/text/' + requestData.textId,
      method: 'get',
      baseURL: API_LOCATION + '/api/v1/'
    });
  }

  // Read all
  readAllText(requestData) {
    return axios({
      url: '/read_all/text/' + requestData.viewpageId,
      method: 'get',
      baseURL: API_LOCATION + '/api/v1/'
    });
  }
}

export default TextService;
