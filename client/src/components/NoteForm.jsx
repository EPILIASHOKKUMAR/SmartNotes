import React, { useState, useEffect } from 'react';
import './NoteForm.css';

const NoteForm = ({ onSubmit, editingNote, onCancelEdit }) => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (editingNote) {
      setTitle(editingNote.title);
      setBody(editingNote.body);
    } else {
      setTitle('');
      setBody('');
    }
    setErrors({});
  }, [editingNote]);

  const validate = () => {
    const newErrors = {};
    if (!title.trim()) {
      newErrors.title = 'Title is required';
    }
    if (!body.trim()) {
      newErrors.body = 'Body is required';
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    onSubmit({ title: title.trim(), body: body.trim() });
    setTitle('');
    setBody('');
    setErrors({});
  };

  const handleCancel = () => {
    setTitle('');
    setBody('');
    setErrors({});
    onCancelEdit();
  };

  return (
    <div className="note-form-container">
      <h2>{editingNote ? 'Edit Note' : 'Create New Note'}</h2>
      <form onSubmit={handleSubmit} className="note-form">
        <div className="form-group">
          <label htmlFor="title">Title *</label>
          <input
            type="text"
            id="title"
            className={`form-input ${errors.title ? 'error' : ''}`}
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
              if (errors.title) setErrors({ ...errors, title: '' });
            }}
            placeholder="Enter note title"
          />
          {errors.title && <span className="error-message">{errors.title}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="body">Content *</label>
          <textarea
            id="body"
            className={`form-textarea ${errors.body ? 'error' : ''}`}
            value={body}
            onChange={(e) => {
              setBody(e.target.value);
              if (errors.body) setErrors({ ...errors, body: '' });
            }}
            placeholder="Enter note content"
            rows="5"
          />
          {errors.body && <span className="error-message">{errors.body}</span>}
        </div>

        <div className="form-actions">
          <button type="submit" className="btn btn-primary">
            {editingNote ? '💾 Update Note' : '➕ Create Note'}
          </button>
          {editingNote && (
            <button type="button" className="btn btn-secondary" onClick={handleCancel}>
              Cancel
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default NoteForm;
