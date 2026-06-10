import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import NoteForm from '../components/NoteForm';
import NotesList from '../components/NotesList';
import * as api from '../services/api';
import './NotesPage.css';

const NotesPage = () => {
  const [notes, setNotes] = useState([]);
  const [filteredNotes, setFilteredNotes] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [editingNote, setEditingNote] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    loadNotes();
  }, []);

  useEffect(() => {
    if (searchQuery.trim()) {
      performSearch(searchQuery);
    } else {
      setFilteredNotes(notes);
    }
  }, [searchQuery, notes]);

  const loadNotes = async () => {
    try {
      setIsLoading(true);
      setError(null);
      const data = await api.fetchNotes();
      setNotes(data);
      setFilteredNotes(data);
    } catch (err) {
      setError('Failed to load notes. Please make sure the server is running.');
      console.error('Error loading notes:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const performSearch = async (query) => {
    try {
      setError(null);
      const results = await api.searchNotes(query);
      setFilteredNotes(results);
    } catch (err) {
      setError('Search failed. Please try again.');
      console.error('Error searching notes:', err);
    }
  };

  const handleCreateOrUpdateNote = async (noteData) => {
    try {
      setError(null);
      if (editingNote) {
        await api.updateNote(editingNote.id, noteData);
        setEditingNote(null);
      } else {
        await api.createNote(noteData);
      }
      await loadNotes();
    } catch (err) {
      setError(editingNote ? 'Failed to update note.' : 'Failed to create note.');
      console.error('Error saving note:', err);
    }
  };

  const handleEditNote = (note) => {
    setEditingNote(note);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDeleteNote = async (id) => {
    try {
      setError(null);
      await api.deleteNote(id);
      await loadNotes();
    } catch (err) {
      setError('Failed to delete note.');
      console.error('Error deleting note:', err);
    }
  };

  const handleCancelEdit = () => {
    setEditingNote(null);
  };

  const handleSearchChange = (query) => {
    setSearchQuery(query);
  };

  return (
    <div className="notes-page">
      <Header />
      <main className="main-content">
        <div className="container">
          {error && (
            <div className="error-banner">
              <span>⚠️</span>
              <span>{error}</span>
              <button onClick={() => setError(null)}>✕</button>
            </div>
          )}

          <NoteForm
            onSubmit={handleCreateOrUpdateNote}
            editingNote={editingNote}
            onCancelEdit={handleCancelEdit}
          />

          <SearchBar
            searchQuery={searchQuery}
            onSearchChange={handleSearchChange}
          />

          <NotesList
            notes={filteredNotes}
            onEdit={handleEditNote}
            onDelete={handleDeleteNote}
            isLoading={isLoading}
            searchQuery={searchQuery}
          />
        </div>
      </main>
    </div>
  );
};

export default NotesPage;
