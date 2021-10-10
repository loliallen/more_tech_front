import axios from "../axios"

const setToken = (token: string) => {
    // set token
    if (!axios.defaults.headers)
        axios.defaults.headers = {}
    axios.defaults.headers['Authorization'] = `Token ${token}`
}

export default setToken