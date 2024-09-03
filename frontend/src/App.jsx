import { useState, useEffect } from "react";
import NoteList from "./components/NoteList";
import InputNote from "./components/InputNote";
import { fetchNotes, createNote, deleteNote } from "./services/noteService";

function App() {
  const [notesData, setNotesData] = useState([]);
  const [newNote, setNewNote] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const getNotes = async () => {
      try {
        const notes = await fetchNotes();
        setNotesData(notes);
      } catch (error) {
        setError("Failed to fetch notes. Please try again later.");
        console.error("Failed to fetch notes:", error);
      }
    };

    getNotes();
  }, []);

  const handlerSubmit = async (e) => {
    e.preventDefault();
    if (!newNote.trim()) return;

    const newNoteObj = {
      title: newNote,
      content: `Content for ${newNote}`,
    };

    try {
      const addedNote = await createNote(newNoteObj);
      setNotesData([...notesData, addedNote]);
      setNewNote("");
      setError("");
    } catch (error) {
      setError("Failed to create note. Please try again later.");
      console.error("Failed to create note:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteNote(id);
      const updatedNotes = notesData.filter((note) => note._id !== id);
      setNotesData(updatedNotes);
      setError("");
    } catch (error) {
      setError("Failed to delete note. Please try again later.");
      console.error("Failed to delete note:", error);
    }
  };

  return (
    <div className="app-container">
      {error && <p className="error-message">{error}</p>}
      <InputNote
        newNote={newNote}
        setNewNote={setNewNote}
        handlerSubmit={handlerSubmit}
      />
      <NoteList notesData={notesData} handleDelete={handleDelete} />
    </div>
  );
}

export default App;
