import React from 'react';
import './NoteCard.css';

const NoteCard = ({ note, onEdit, onDelete }) => {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    };
    return date.toLocaleString('en-US', options);
  };

  const getDateLabel = () => {
    if (note.updatedAt && note.updatedAt !== note.createdAt) {
      return `🔄 Updated: ${formatDate(note.updatedAt)}`;
    }
    return `📅 Created: ${formatDate(note.createdAt)}`;
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
      <div className="note-body" dangerouslySetInnerHTML={{ __html: note.body }}></div>
      <div className="note-footer">
        <span className="note-date">{getDateLabel()}</span>
      </div>
    </div>
  );
};

export default NoteCard;
