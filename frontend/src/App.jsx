import { useState } from "react";

import NoteList from "./components/NoteList";
import InputNote from "./components/InputNote";

function App() {
  const noteData = [
    {
      _id: "64e7d4cfae89f272ce5f9a7b",
      title: "Sample Note Title 1",
      content: "Content of the first sample note.",
    },
    {
      _id: "64e7d4cfae89f272ce5f9a7c",
      title: "Sample Note Title 2",
      content: "Content of the second sample note.",
    },
  ];

  // State to manage the list of notes
  const [notesData, setNotesData] = useState(noteData);

  // State to manage the new note input
  const [newNote, setNewNote] = useState("");

  // Handler to add a new note
  const handlerSubmit = (e) => {
    e.preventDefault();

    // Validate the new note input
    if (!newNote.trim()) return;

    // Create a new note object
    const newNoteObj = {
      _id: Date.now().toString(),
      title: newNote,
      content: `Content for ${newNote}`, // Placeholder content
    };

    // Update the state with the new note
    setNotesData([...notesData, newNoteObj]);

    // Clear the input after adding the note
    setNewNote("");
  };

  // Handler to delete a note
  const handleDelete = (id) => {
    const updatedNotes = notesData.filter((note) => note._id !== id);
    setNotesData(updatedNotes);
  };

  return (
    <div className="app-container">
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
