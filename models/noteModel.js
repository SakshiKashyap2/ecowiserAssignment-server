const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
  noteTitle: {
    type: String,
    required: true,
  },
  noteBody: {
    type: String,
    required: true,
  },
  isPinned: {
    type: Boolean,
    required: true,
    default: false,
  },
});

const Note = mongoose.model('Note', noteSchema);
module.exports = Note;
