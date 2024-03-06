import axios from 'axios';

const URL = "http://localhost:8080/api/v1/Order";
// const URL = "http://localhost:3000/Booking";
class Order {

    createorder(data) {
        console.log(data)
        return axios.post(URL, data);
    }

    getorder() {
        return axios.get(URL);
    }

    getorderbyid(Customerid) {
        return axios.get(URL+'/'+ Customerid);
    }

    editorder(Customerid,data){
        console.log(data);
        return axios.put(URL+'/'+Customerid,data);
    }
 
    deleteorder(Customerid) {
        return axios.delete(URL + '/' + Customerid);
    }
} 

export default new Order;