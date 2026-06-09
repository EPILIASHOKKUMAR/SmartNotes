import React from 'react';
import './NoteCard.css';

const NoteCard = ({ note, onEdit, onDelete }) => {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this note?')) {
      onDelete(note.id);
    }
  };

  return (
    <div className="note-card">
      <div className="note-card-header">
        <h3 className="note-title">{note.title}</h3>
        <div className="note-actions">
          <button
            className="action-btn edit-btn"
            onClick={() => onEdit(note)}
            aria-label="Edit note"
            title="Edit"
          >
            ✏️
          </button>
          <button
            className="action-btn delete-btn"
            onClick={handleDelete}
            aria-label="Delete note"
            title="Delete"
          >
            🗑️
          </button>
        </div>
      </div>
      <p className="note-body">{note.body}</p>
      <div className="note-footer">
        <span className="note-date">📅 {formatDate(note.createdAt)}</span>
      </div>
    </div>
  );
};

export default NoteCard;
