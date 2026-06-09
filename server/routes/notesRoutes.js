const express = require('express');
const router = express.Router();
const {
  getAllNotes,
  createNote,
  updateNote,
  deleteNote,
  searchNotes
} = require('../controllers/notesController');

// Search route must come before /:id routes to avoid conflicts
router.get('/search', searchNotes);

// CRUD routes
router.get('/', getAllNotes);
router.post('/', createNote);
router.put('/:id', updateNote);
router.delete('/:id', deleteNote);

module.exports = router;
