// Service for interacting with API
import axios from 'axios';

class FormTextInputService {
  // Read one
  readOneFormTextInput(requestData) {
    return axios({
      url: '/read_one/form_text_inputs/' + requestData.formTextInputId,
      method: 'get',
      baseURL: 'http://159.203.105.123:3000/api/v1/'
    });
  }

  // Read all
  readAllFormTextInputs(requestData) {
    return axios({
      url: '/read_all/form_text_inputs/' + requestData.formId,
      method: 'get',
      baseURL: 'http://159.203.105.123:3000/api/v1/'
    });
  }
}

export default FormTextInputService;
