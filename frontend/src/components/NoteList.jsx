import Note from "./Note";

const NoteList = ({ notesData, handleDelete }) => {
  return (
    <div className="note-list">
      {notesData.map((note) => (
        <Note key={note._id} note={note} handleDelete={handleDelete} />
      ))}
    </div>
  );
};

export default NoteList;
