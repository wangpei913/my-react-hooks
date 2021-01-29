import axios from 'axios'

const instance = axios.create({
    baseURL: '/api'
})

instance.interceptors.request.use((config) => config)

instance.interceptors.response.use((response) => {
    return response
}, (error) => {
    console.log(error)
    return
})

export default instance.request