const express = require('express');
const router = express.Router();
const {
  getAllNotes,
  createNote,
  updateNote,
  deleteNote,
  searchNotes
} = require('../controllers/notesController');

router.get('/search', searchNotes);

router.get('/', getAllNotes);
router.post('/', createNote);
router.put('/:id', updateNote);
router.delete('/:id', deleteNote);

module.exports = router;
