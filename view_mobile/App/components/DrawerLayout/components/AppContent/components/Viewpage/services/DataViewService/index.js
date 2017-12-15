// Service for interacting with API
import axios from 'axios';

class DataViewService {
  // Read one
  readOneDataView(requestData) {
    return axios({
      url: '/read_one/data_view/' + requestData.dataViewId,
      method: 'get',
      baseURL: 'http://159.203.105.123:3000/api/v1/'
    });
  }

  // Read all
  readAllDataViews(requestData) {
    return axios({
      url: '/read_all/data_view/' + requestData.viewpageId,
      method: 'get',
      baseURL: 'http://159.203.105.123:3000/api/v1/'
    });
  }
}

export default DataViewService;
