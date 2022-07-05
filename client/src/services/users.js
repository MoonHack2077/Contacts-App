import axios from 'axios'
import { BASE_URL } from '../constants'

export const getUser = async (id) => {
    const { data } = await axios.get(`${BASE_URL}/api/users/${id}`)
    return data
}