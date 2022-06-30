import axios from 'axios'
import { BASE_URL } from '../constants.js'

const URL = `${BASE_URL}/api/notes`

const getAllNotes = async () => {
    const request = await axios.get(URL)
    return request.data
}

const getOneNote = async (id) => {
    const request = await axios.get(`${URL}/${id}`)
    return request.data
}

const postNewNote = async (newNote) => {
    const request = await axios.post(URL, newNote)
    return request.data
}

const deleteNote = async (id) =>{
    const request = await axios.delete(`${URL}/${id}`)
    return request.data
}

const updateNote = async (id,newNote) => {
    const request = await axios.put(`${URL}/${id}`, newNote)
    return request.data
}

export { getAllNotes, getOneNote, postNewNote, deleteNote, updateNote }