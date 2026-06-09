const { v4: uuidv4 } = require('uuid');
const { notes } = require('../data/notesData');

/**
 * Get all notes
 * @route GET /api/notes
 */
const getAllNotes = (req, res) => {
  try {
    // Sort notes by createdAt in descending order (most recent first)
    const sortedNotes = [...notes].sort((a, b) => 
      new Date(b.createdAt) - new Date(a.createdAt)
    );
    res.json(sortedNotes);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch notes' });
  }
};

/**
 * Create a new note
 * @route POST /api/notes
 */
const createNote = (req, res) => {
  try {
    const { title, body } = req.body;

    // Validation
    if (!title || !title.trim()) {
      return res.status(400).json({ error: 'Title is required' });
    }
    if (!body || !body.trim()) {
      return res.status(400).json({ error: 'Body is required' });
    }

    // Create new note
    const newNote = {
      id: uuidv4(),
      title: title.trim(),
      body: body.trim(),
      createdAt: new Date().toISOString()
    };

    notes.push(newNote);
    res.status(201).json(newNote);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create note' });
  }
};

/**
 * Update an existing note
 * @route PUT /api/notes/:id
 */
const updateNote = (req, res) => {
  try {
    const { id } = req.params;
    const { title, body } = req.body;

    // Validation
    if (!title || !title.trim()) {
      return res.status(400).json({ error: 'Title is required' });
    }
    if (!body || !body.trim()) {
      return res.status(400).json({ error: 'Body is required' });
    }

    // Find note index
    const noteIndex = notes.findIndex(note => note.id === id);
    
    if (noteIndex === -1) {
      return res.status(404).json({ error: 'Note not found' });
    }

    // Update note (preserve id and createdAt)
    notes[noteIndex] = {
      ...notes[noteIndex],
      title: title.trim(),
      body: body.trim()
    };

    res.json(notes[noteIndex]);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update note' });
  }
};

/**
 * Delete a note
 * @route DELETE /api/notes/:id
 */
const deleteNote = (req, res) => {
  try {
    const { id } = req.params;

    // Find note index
    const noteIndex = notes.findIndex(note => note.id === id);
    
    if (noteIndex === -1) {
      return res.status(404).json({ error: 'Note not found' });
    }

    // Remove note
    notes.splice(noteIndex, 1);
    res.json({ message: 'Note deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete note' });
  }
};

/**
 * Search notes by keyword
 * @route GET /api/notes/search?q=keyword
 */
const searchNotes = (req, res) => {
  try {
    const { q } = req.query;

    if (!q || !q.trim()) {
      return res.json([]);
    }

    const searchTerm = q.trim().toLowerCase();

    // Case-insensitive substring search in title and body
    const matchingNotes = notes.filter(note => 
      note.title.toLowerCase().includes(searchTerm) || 
      note.body.toLowerCase().includes(searchTerm)
    );

    // Sort by most recent first
    const sortedResults = matchingNotes.sort((a, b) => 
      new Date(b.createdAt) - new Date(a.createdAt)
    );

    res.json(sortedResults);
  } catch (error) {
    res.status(500).json({ error: 'Failed to search notes' });
  }
};

module.exports = {
  getAllNotes,
  createNote,
  updateNote,
  deleteNote,
  searchNotes
};
