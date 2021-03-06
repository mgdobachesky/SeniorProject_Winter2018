// Import required modules
import axios from 'axios';

// Import the API location
import {API_LOCATION} from 'Constants';

class ViewpageService {
    /*
     * HTTP call used to create Viewpages
     */
    createViewpage(requestData) {
        return axios({
            url: '/create/viewpages',
            method: 'post',
            baseURL: API_LOCATION + '/api/v1/',
            headers: {
                'Content-Type': 'application/json'
            },
            data: {
                'viewsiteId': requestData.viewsiteId,
                'viewpageName': requestData.viewpageName,
                'permissionLevel': requestData.permissionLevel
            }
        });
    }

    /*
     * HTTP call used to update Viewpages
     */
    updateViewpage(requestData) {
        return axios({
            url: '/update/viewpages',
            method: 'put',
            baseURL: API_LOCATION + '/api/v1/',
            headers: {
                'Content-Type': 'application/json'
            },
            data: {
                "viewsiteId": requestData.viewsiteId,
                "viewpageId": requestData.viewpageId,
                'viewpageName': requestData.viewpageName,
                'permissionLevel': requestData.permissionLevel,
                'kind': requestData.kind,
                'catchPhrase': requestData.catchPhrase
            }
        });
    }

    /*
     * HTTP call used to delete Viewpages
     */
    deleteViewpage(requestData) {
        return axios({
            url: '/delete/viewpages',
            method: 'delete',
            baseURL: API_LOCATION + '/api/v1/',
            headers: {
                'Content-Type': 'application/json'
            },
            data: {
                "viewsiteId": requestData.viewsiteId,
                "viewpageId": requestData.viewpageId
            }
        });
    }

    /*
     * HTTP call used to sort Viewpage Elements
     */
    sortViewpageElements(requestData) {
        return axios({
            url: '/sort/elements',
            method: 'post',
            baseURL: API_LOCATION + '/api/v1/',
            headers: {
                'Content-Type': 'application/json'
            },
            data: {
                "viewsiteId": requestData.viewsiteId,
                "viewpageId": requestData.viewpageId,
                "elementId": requestData.elementId,
                "sortOrder": requestData.sortOrder
            }
        });
    }
}

// Export the HTTP service
export default ViewpageService;
