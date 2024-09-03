const mongoose = require('mongoose')
const Scheme = mongoose.Schema;

const noteScheme = new Scheme(
  {
    title: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
  },
  { Timestamp: true }
);

const Note = mongoose.model("Note", noteScheme);
module.exports = Note;
