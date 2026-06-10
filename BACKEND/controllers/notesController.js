const { v4: uuidv4 } = require('uuid');
const { notes } = require('../data/notesData');

const getAllNotes = (req, res) => {
  try {
    const sortedNotes = [...notes].sort((a, b) => 
      new Date(b.createdAt) - new Date(a.createdAt)
    );
    res.json(sortedNotes);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch notes' });
  }
};

const createNote = (req, res) => {
  try {
    const { title, body } = req.body;

    if (!title || !title.trim()) {
      return res.status(400).json({ error: 'Title is required' });
    }
    if (!body || !body.trim()) {
      return res.status(400).json({ error: 'Body is required' });
    }

    const titleLower = title.trim().toLowerCase();
    const duplicateExists = notes.some(
      note => note.title.toLowerCase() === titleLower
    );

    if (duplicateExists) {
      return res.status(400).json({ error: 'A note with this title already exists' });
    }

    const newNote = {
      id: uuidv4(),
      title: title.trim(),
      body: body.trim(),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };

    notes.push(newNote);
    res.status(201).json(newNote);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create note' });
  }
};

const updateNote = (req, res) => {
  try {
    const { id } = req.params;
    const { title, body } = req.body;

    if (!title || !title.trim()) {
      return res.status(400).json({ error: 'Title is required' });
    }
    if (!body || !body.trim()) {
      return res.status(400).json({ error: 'Body is required' });
    }

    const noteIndex = notes.findIndex(note => note.id === id);
    
    if (noteIndex === -1) {
      return res.status(404).json({ error: 'Note not found' });
    }

    const titleLower = title.trim().toLowerCase();
    const duplicateExists = notes.some(
      note => note.id !== id && note.title.toLowerCase() === titleLower
    );

    if (duplicateExists) {
      return res.status(400).json({ error: 'A note with this title already exists' });
    }

    notes[noteIndex] = {
      ...notes[noteIndex],
      title: title.trim(),
      body: body.trim(),
      updatedAt: new Date().toISOString()
    };

    res.json(notes[noteIndex]);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update note' });
  }
};

const deleteNote = (req, res) => {
  try {
    const { id } = req.params;

    const noteIndex = notes.findIndex(note => note.id === id);
    
    if (noteIndex === -1) {
      return res.status(404).json({ error: 'Note not found' });
    }

    notes.splice(noteIndex, 1);
    res.json({ message: 'Note deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete note' });
  }
};

const searchNotes = (req, res) => {
  try {
    const { q } = req.query;

    if (!q || !q.trim()) {
      return res.json([]);
    }

    const searchTerm = q.trim().toLowerCase();

    const matchingNotes = notes.filter(note => {
      const titleMatch = note.title.toLowerCase().includes(searchTerm);
      const bodyText = note.body.replace(/<[^>]*>/g, '');
      const bodyMatch = bodyText.toLowerCase().includes(searchTerm);
      return titleMatch || bodyMatch;
    });

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
