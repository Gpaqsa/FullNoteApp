import Note from "./Note";

const NoteList = ({ notesData, handleDelete }) => {
  return (
    <div>
      {notesData.map((note) => (
        <Note key={note._id} note={note} handleDelete={handleDelete} />
      ))}
    </div>
  );
};

export default NoteList;
