// Service for interacting with API
import axios from 'axios';

// Import the location of the API
import { API_LOCATION } from 'Constants';

class FormTextInputService {
  // Read one
  readOneFormTextInput(requestData) {
    return axios({
      url: '/read_one/form_text_inputs/' + requestData.formTextInputId,
      method: 'get',
      baseURL: API_LOCATION + '/api/v1/'
    });
  }

  // Read all
  readAllFormTextInputs(requestData) {
    return axios({
      url: '/read_all/form_text_inputs/' + requestData.formId,
      method: 'get',
      baseURL: API_LOCATION + '/api/v1/'
    });
  }
}

export default FormTextInputService;
