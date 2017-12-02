// Service for interacting with API
import axios from 'axios';

class TextService {
  // Read one
  readOneText(requestData) {
    return axios({
      url: '/read_one/text/' + requestData.textId,
      method: 'get',
      baseURL: 'http://159.203.105.123:3000/api/v1/'
    });
  }

  // Read all
  readAllText(requestData) {
    return axios({
      url: '/read_all/text/' + requestData.viewpageId,
      method: 'get',
      baseURL: 'http://159.203.105.123:3000/api/v1/'
    });
  }
}

export default TextService;
