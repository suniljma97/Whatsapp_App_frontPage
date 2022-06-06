import axios from 'axios';
//const baseURL="http://localhost:2410";
const baseURL="https://nameless-ocean-23217.herokuapp.com";
function get(url){
    return axios.get(baseURL + url);
}
export default{
    get
}
