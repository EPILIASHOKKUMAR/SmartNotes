import React from 'react';
import NoteCard from './NoteCard';
import './NotesList.css';

const NotesList = ({ notes, onEdit, onDelete, isLoading, searchQuery }) => {
  if (isLoading) {
    return (
      <div className="notes-list-message">
        <div className="spinner"></div>
        <p>Loading notes...</p>
      </div>
    );
  }

  if (notes.length === 0) {
    return (
      <div className="notes-list-message">
        <div className="empty-state">
          <span className="empty-icon">📭</span>
          <h3>
            {searchQuery 
              ? `No notes found for "${searchQuery}"`
              : 'No notes yet'}
          </h3>
          <p>
            {searchQuery
              ? 'Try a different search term'
              : 'Create your first note to get started!'}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="notes-list-container">
      <div className="notes-count">
        {searchQuery ? (
          <p>Found {notes.length} note{notes.length !== 1 ? 's' : ''} matching "{searchQuery}"</p>
        ) : (
          <p>{notes.length} total note{notes.length !== 1 ? 's' : ''}</p>
        )}
      </div>
      <div className="notes-grid">
        {notes.map((note) => (
          <NoteCard
            key={note.id}
            note={note}
            onEdit={onEdit}
            onDelete={onDelete}
          />
        ))}
      </div>
    </div>
  );
};

export default NotesList;
