const InputNote = ({ newNote, setNewNote, handlerSubmit }) => {
  return (
    <form onSubmit={handlerSubmit} className="form">
      <input
        type="text"
        value={newNote}
        onChange={(e) => setNewNote(e.target.value)}
        placeholder="Enter note title"
      />
      <button type="submit">Add Note</button>
    </form>
  );
};

export default InputNote;
