// Service for interacting with API
import axios from 'axios';

// Import the location of the API
import { API_LOCATION } from 'Constants';

class DataViewService {
  // Read one
  readOneDataView(requestData) {
    return axios({
      url: '/read_one/data_view/' + requestData.dataViewId,
      method: 'get',
      baseURL: API_LOCATION + '/api/v1/'
    });
  }

  // Read all
  readAllDataViews(requestData) {
    return axios({
      url: '/read_all/data_view/' + requestData.viewpageId,
      method: 'get',
      baseURL: API_LOCATION + '/api/v1/'
    });
  }
}

export default DataViewService;
