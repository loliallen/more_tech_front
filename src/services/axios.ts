import axios from "axios";

axios.defaults.baseURL = process.env['REACT_APP_BASE_API_URL']
console.log(process.env)
export default axios