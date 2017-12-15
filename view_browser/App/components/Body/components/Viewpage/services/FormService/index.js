// Service for interacting with API
import axios from 'axios';

// Import the location of the API
import { API_LOCATION } from 'Constants';

class FormService {
  // Read one
  readOneForm(requestData) {
    return axios({
      url: '/read_one/forms/' + requestData.formId,
      method: 'get',
      baseURL: API_LOCATION + '/api/v1/'
    });
  }

  // Read all
  readAllFormsByViewsite(requestData) {
    return axios({
      url: '/read_all/forms/viewsite/' + requestData.viewsiteId,
      method: 'get',
      baseURL: API_LOCATION + '/api/v1/'
    });
  }

  readAllFormsByViewpage(requestData) {
    return axios({
      url: '/read_all/forms/viewpage/' + requestData.viewpageId,
      method: 'get',
      baseURL: API_LOCATION + '/api/v1/'
    });
  }
}

export default FormService;
