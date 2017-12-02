// Service for interacting with API
import axios from 'axios';

class FormService {
  // Read one
  readOneForm(requestData) {
    return axios({
      url: '/read_one/forms/' + requestData.formId,
      method: 'get',
      baseURL: 'http://159.203.105.123:3000/api/v1/'
    });
  }

  // Read all
  readAllFormsByViewsite(requestData) {
    return axios({
      url: '/read_all/forms/viewsite/' + requestData.viewsiteId,
      method: 'get',
      baseURL: 'http://159.203.105.123:3000/api/v1/'
    });
  }

  readAllFormsByViewpage(requestData) {
    return axios({
      url: '/read_all/forms/viewpage/' + requestData.viewpageId,
      method: 'get',
      baseURL: 'http://159.203.105.123:3000/api/v1/'
    });
  }
}

export default FormService;
