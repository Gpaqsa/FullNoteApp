import axios from "axios";

const API_BASE_URL = "http://localhost:3002/"; // Your backend URL

// Fetch all notes
export const fetchNotes = async () => {
  const response = await axios.get(API_BASE_URL);
  return response.data;
};

// Create a new note
export const createNote = async (note) => {
  const response = await axios.post(API_BASE_URL, note);
  return response.data;
};

// Update a note
export const updateNote = async (id, updatedNote) => {
  const response = await axios.patch(`${API_BASE_URL}/${id}`, updatedNote);
  return response.data;
};

// Delete a note
export const deleteNote = async (id) => {
  const response = await axios.delete(`${API_BASE_URL}/${id}`);
  return response.data;
};
