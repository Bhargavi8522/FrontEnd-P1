import axios from 'axios';

const URL = "http://localhost:8080/api/v1/User/create";
const getURL = "http://localhost:8080/api/v1/User";
// const URL = "http://localhost:3000/Booking";
class UserServices {

    createUser(data) {
        // console.log(data)
        return axios.post(URL, data);
    }

    getUser() {
        return axios.get(getURL);
    }
}

export default new UserServices;