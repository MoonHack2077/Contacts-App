import axios from 'axios'
import { BASE_URL } from '../constants.js'

const login = async (credentials) => {
    const response = await axios.post(`${BASE_URL}/login`, credentials)
    return response.data
}

export { login }