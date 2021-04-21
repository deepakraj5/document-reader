import axios from 'axios'

const baseUrl = 'http://localhost:3001'

class AppService {

    getAadhaar (data) {
        return axios.post(baseUrl + '/aadhaar/fileupload', data )
    }

    getPanCard (data) {
        return axios.post(baseUrl + '/pan/fileupload', data )
    }

    getPassport (data) {
        return axios.post(baseUrl + '/passport/fileupload', data )
    }

    getDrivingLicense (data) {
        return axios.post(baseUrl + '/driving/fileupload', data )
    }

}


export default new AppService()