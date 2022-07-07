import axios from 'axios'
import { BASE_URL } from '../constants.js'

export const signUp = async (newUser) => {
    const { data } = await axios.post(`${BASE_URL}/api/users`, newUser)
    return data
}
