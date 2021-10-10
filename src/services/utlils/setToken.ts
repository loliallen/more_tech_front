
const setToken = (token: string) => {
    // set token
    const cookie = `csrftoken=${token}`
    document.cookie = cookie
}

export default setToken