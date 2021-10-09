import axios from "./axios";

const login = async (login: string, password: string):Promise<{key: string}> => {
    const data = {
        email: login,
        password
    }
    const res = await axios( {
        method: 'POST',
        url: 'api/rest-auth/login/',
        data
    })
    return res.data
}
const logout = async () => {
    const res = await axios( {
        method: 'POST',
        url: 'api/rest-auth/logout/',
    })
    return res.data
}

const authApiRequests = {
    login,
    logout
}

export default authApiRequests