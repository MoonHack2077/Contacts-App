import axios from 'axios'
import { BASE_URL } from '../constants.js'

const URL = `${BASE_URL}/api/contacts`

export const getAllContacts = async () => {
    const { data } = await axios.get(URL)
    return data
}

export const getOneContact = async (id) => {
    const { data } = await axios.get(`${URL}/${id}`)
    return  data
}

export const postNewContact = async (newContact, token) => {
    const { data } = await axios.post(URL, newContact, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    return  data
}

export const deleteContact = async (id) =>{
    const { data } = await axios.delete(`${URL}/${id}`)
    return data
}

export const updateContact = async (id, newContact) => {
    const { data } = await axios.put(`${URL}/${id}`, newContact)
    return  data
}