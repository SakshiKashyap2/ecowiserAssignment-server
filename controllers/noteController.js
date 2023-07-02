const Note = require('../models/noteModel');

// @desc    Create a note
// @route   POST /api/note/
// @access  Public
const createNote = async (req, res) => {
  try {
    const newNote = new Note({
      noteTitle: req.body.title,
      noteBody: req.body.content,
    });

    await newNote.save();
    res.status(201).json({ newNote });
  } catch (error) {
    res.status(500).json({ message: error.message });
    console.log(error);
  }
};

// @desc    Get all notes
// @route   GET /api/note
// @access  Public
const getAllNotes = async (req, res) => {
  try {
    const allNotes = await Note.find({ isPinned: false });
    if (allNotes) {
      res.status(200).json({ allNotes });
    } else {
      res.status(404).json({ message: 'No notes were found!' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
    console.log(error);
  }
};

// @desc    Get all pinned notes
// @route   GET /api/note
// @access  Public
const getAllPinnedNotes = async (req, res) => {
  try {
    const allPinnedNotes = await Note.find({ isPinned: true });
    if (allPinnedNotes) {
      res.status(200).json({ allPinnedNotes });
    } else {
      res.status(404).json({ message: 'No notes were found!' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
    console.log(error);
  }
};

// @desc    Pin notes
// @route   POST /api/note/pin
// @access  Public
const pinNote = async (req, res) => {
  try {
    const { _id, pinStatus } = req.body;
    const note = await Note.findByIdAndUpdate(
      { _id: _id },
      { isPinned: Boolean(pinStatus) }
    );
    res.status(200).send(note);
  } catch (error) {
    res.status(404).json({ message: error.message });
    console.log(error);
  }
};

// @desc    Welcome message
// @route   DELETE /api/note/delete
// @access  Public
const deleteNote = async (req, res) => {
  try {
    const { _id } = req.body;
    console.log(req.body);
    const note = await Note.findByIdAndDelete({ _id: _id });
    res.status(200).send(note);
  } catch (error) {
    res.status(500).json({ message: error.message });
    console.log(error);
  }
};

// @desc    Update Details
// @route   PATCH /api/note/
// @access  Public
const updateNote = async (req, res) => {
  try {
    const { _id, title, content } = req.body;
    console.log(req.body);
    const note = await Note.findByIdAndUpdate(
      {
        _id: _id,
      },
      {
        noteTitle: title,
        noteBody: content,
      }
    );
    res.status(200).send(note);
  } catch (error) {
    res.status(500).json({ message: error.message });
    console.log(error);
  }
};

module.exports = {
  createNote,
  getAllNotes,
  pinNote,
  deleteNote,
  getAllPinnedNotes,
  updateNote,
};
