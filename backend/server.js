const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const notesRouter = require("./routes/notes");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3002;
const MONGODB_URI = process.env.MONGODB_URI;

// Middleware
app.use(cors());
app.use(express.json());

// Database connection
mongoose
  .connect(MONGODB_URI)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
    console.log("Connected to Database");
  })
  .catch((err) => {
    console.error("Failed to connect to MongoDB", err);
  });

// Routes
app.use("/notes", notesRouter);
