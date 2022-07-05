import axios from 'axios'
import { BASE_URL } from '../constants.js'

const signUp = async (newUser) => {
    const { data } = await axios.post(`${BASE_URL}/api/users`, newUser)
    return data
}

export { signUp }