import axios from 'axios'
import { BASE_URL } from '../constants.js'

export const login = async (credentials) => {
    const { data } = await axios.post(`${BASE_URL}/login`, credentials)
    return data
}
