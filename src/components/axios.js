import axios from 'axios'
const instance = axios.create({
    baseURL: "https://message-app-backends.herokuapp.com/"
})
export default instance
