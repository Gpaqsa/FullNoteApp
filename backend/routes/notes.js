// routes/notes.js
const express = require("express");
const router = express.Router();
const Note = require("../model/Note")

// Get all notes
router.get("/", (req, res) => {
  Note.find()
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.status(500).json({ message: err.message });
      console.error(err.message);
    });
});

router.get("/:id", (req, res) => {
  Note.findById(req.params.id)
    .then((note) => {
      if (!note) {
        return res.status(404).json({ message: "Note not found" });
      }
      res.json(note);
    })
    .catch((err) => {
      res.status(500).json({ message: err.message });
      console.error(err.message);
    });
});

router.post("/", (req, res) => {
  const note = new Note({
    title: req.body.title,
    content: req.body.content,
  });

  note
    .save()
    .then((newNote) => res.status(201).json(newNote))
    .catch((err) => {
      res.status(400).json({ message: err.message });
      console.error(err.message);
    });
});

router.patch("/:id", (req, res) => {
  Note.findById(req.params.id)
    .then((note) => {
      if (!note) {
        return res.status(404).json({ message: "Note not found" });
      }

      if (req.body.title != null) {
        note.title = req.body.title;
      }
      if (req.body.content != null) {
        note.content = req.body.content;
      }

      return note.save();
    })
    .then((updatedNote) => res.json(updatedNote))
    .catch((err) => {
      res.status(400).json({ message: err.message });
      console.error(err.message);
    });
});

// Delete a note
router.delete("/:id", (req, res) => {
  Note.findById(req.params.id)
    .then((note) => {
      if (!note) {
        return res.status(404).json({ message: "Note not found" });
      }

      return note.remove();
    })
    .then(() => res.json({ message: "Note deleted" }))
    .catch((err) => {
      res.status(500).json({ message: err.message });
      console.error(err.message);
    });
});


module.exports = router;
