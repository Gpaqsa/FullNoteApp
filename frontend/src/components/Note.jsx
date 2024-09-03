const Note = ({ note, handleDelete }) => {
  return (
    <div className="note">
      <h2>{note.title}</h2>
      <p>{note.content}</p>
      <button onClick={() => handleDelete(note._id)}>Delete</button>
    </div>
  );
};

export default Note;
