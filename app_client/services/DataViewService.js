// Service for interacting with API
import axios from 'axios';

// Import required modules
import ServiceOptions from './ServiceOptions';

class DataViewService extends ServiceOptions {
  // Read one
  readOneDataView(requestData) {
    return axios({
      url: '/read_one/data_view/' + requestData.dataViewId,
      method: 'get',
      baseURL: super.getRequestLocation() + '/api/v1/'
    });
  }

  // Read all
  readAllDataViews(requestData) {
    return axios({
      url: '/read_all/data_view/' + requestData.viewpageId,
      method: 'get',
      baseURL: super.getRequestLocation() + '/api/v1/'
    });
  }

  // Create
  createDataView(requestData) {
    return axios({
      url: '/create/data_view/',
      method: 'post',
      baseURL: super.getRequestLocation() + '/api/v1/',
      headers: {
        'Content-Type': 'application/json'
      },
      data: {
        'formId': requestData.formId,
        'viewpageId': requestData.viewpageId
      }
    });
  }

  // Update
  updateDataView(requestData) {
    return axios({
      url: '/update/data_view/' + requestData.dataViewId,
      method: 'put',
      baseURL: super.getRequestLocation() + '/api/v1/',
      headers: {
        'Content-Type': 'application/json'
      },
      data: {
        'formId': requestData.formId
      }
    });
  }

  // Delete
  deleteDataView(requestData) {
    return axios({
      url: '/delete/data_view/' + requestData.dataViewId,
      method: 'delete',
      baseURL: super.getRequestLocation() + '/api/v1/'
    });
  }
}

export default DataViewService;
