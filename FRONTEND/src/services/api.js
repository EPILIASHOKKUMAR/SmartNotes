const API_BASE_URL = 'http://localhost:5000/api';

export const fetchNotes = async () => {
  const response = await fetch(`${API_BASE_URL}/notes`);
  if (!response.ok) {
    throw new Error('Failed to fetch notes');
  }
  return response.json();
};

export const createNote = async (noteData) => {
  const response = await fetch(`${API_BASE_URL}/notes`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(noteData),
  });
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.error || 'Failed to create note');
  }
  return response.json();
};

export const updateNote = async (id, noteData) => {
  const response = await fetch(`${API_BASE_URL}/notes/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(noteData),
  });
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.error || 'Failed to update note');
  }
  return response.json();
};

export const deleteNote = async (id) => {
  const response = await fetch(`${API_BASE_URL}/notes/${id}`, {
    method: 'DELETE',
  });
  if (!response.ok) {
    throw new Error('Failed to delete note');
  }
  return response.json();
};

export const searchNotes = async (query) => {
  const response = await fetch(`${API_BASE_URL}/notes/search?q=${encodeURIComponent(query)}`);
  if (!response.ok) {
    throw new Error('Failed to search notes');
  }
  return response.json();
};
