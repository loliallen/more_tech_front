import axios from "../axios"

const setToken = (token: string) => {
    if (!axios.defaults.headers)
        axios.defaults.headers = {}
    // set token
    if(token) {
        axios.defaults.headers['Authorization'] = `Token ${token}`
        localStorage.setItem('token', token)
    } else {
        if(localStorage.getItem('token')) {
            token = localStorage.getItem('token')!
            axios.defaults.headers['Authorization'] = `Token ${token}`
        }
    }
}

export default setToken