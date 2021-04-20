import axios from 'axios'

const baseUrl = 'http://localhost:3001'

class AppService {

    getAadhaar (data) {
        return axios.post(baseUrl + '/aadhaar/fileupload', data )
    }

}


export default new AppService()