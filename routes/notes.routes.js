const express = require('express');
const router = express.Router();

const {
  createNote,
  deleteNote,
  getAllNotes,
  pinNote,
  getAllPinnedNotes,
  updateNote,
} = require('../controllers/noteController');

router.post('/', createNote);
router.get('/', getAllNotes);
router.get('/pin', getAllPinnedNotes);
router.post('/pin', pinNote);
router.post('/delete', deleteNote);
router.patch('/', updateNote);

module.exports = router;
