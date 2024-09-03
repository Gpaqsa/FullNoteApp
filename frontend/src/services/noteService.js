import axios from "axios";

const API_BASE_URL = "http://localhost:3002/notes";

// Fetch all notes
export const fetchNotes = async () => {
  try {
    const response = await axios.get(API_BASE_URL);
    return response.data;
  } catch (error) {
    console.error("Failed to fetch notes:", error);
    throw error;
  }
};

// Create a new note
export const createNote = async (note) => {
  try {
    const response = await axios.post(API_BASE_URL, note);
    return response.data;
  } catch (error) {
    console.error("Failed to create note:", error);
    throw error;
  }
};

// Update a note
export const updateNote = async (id, updatedNote) => {
  try {
    const response = await axios.patch(`${API_BASE_URL}/${id}`, updatedNote);
    return response.data;
  } catch (error) {
    console.error("Failed to update note:", error);
    throw error;
  }
};

// Delete a note
export const deleteNote = async (id) => {
  try {
    const response = await axios.delete(`${API_BASE_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error("Failed to delete note:", error);
    throw error;
  }
};
