import axios from 'axios';

const API_URL = 'http://localhost:3005/api/notes';

export const fetchNotes = async () => {
    const response = await axios.get(`${API_URL}/list`);  // Assuming your backend has '/list' route
    return response.data;
};

export const createNote = async (text) => {
    await axios.post(`${API_URL}/create`, { text });  // Assuming your backend has '/create' route
};

export const deleteNote = async (id) => {
    await axios.delete(`${API_URL}/delete/${id}`);  // Assuming your backend has '/delete/:id' route
};
