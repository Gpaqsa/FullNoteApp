const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const noteSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      // Changed from body to content to match the routes
      type: String,
      required: true,
    },
  },
  { timestamps: true } // Changed Timestamp to timestamps
);

const Note = mongoose.model("Note", noteSchema);
module.exports = Note;
