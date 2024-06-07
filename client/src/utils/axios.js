import axios from 'axios'

const axiosInstance = axios.create({
    baseURL: 'http://localhost:8000'
})

axiosInstance.interceptors.request.use((
    (config) => {
        config.headers['role'] = localStorage.getItem('role') || 'Role A'
        return config
    }
))

export default axiosInstance