import React, { useState, useEffect } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import './NoteForm.css';

const NoteForm = ({ onSubmit, editingNote, onCancelEdit }) => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [errors, setErrors] = useState({});

  const modules = {
    toolbar: [
      [{ 'header': [1, 2, 3, false] }],
      [{ 'font': [] }],
      [{ 'size': ['small', false, 'large', 'huge'] }],
      ['bold', 'italic', 'underline', 'strike'],
      [{ 'color': [] }, { 'background': [] }],
      [{ 'list': 'ordered'}, { 'list': 'bullet' }],
      [{ 'align': [] }],
      ['blockquote'],
      ['link', 'image'],
      ['clean']
    ]
  };

  const formats = [
    'header', 'font', 'size',
    'bold', 'italic', 'underline', 'strike',
    'color', 'background',
    'list', 'bullet',
    'align',
    'blockquote',
    'link', 'image'
  ];

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
    const strippedBody = body.replace(/<[^>]*>/g, '').trim();
    if (!strippedBody) {
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

    onSubmit({ title: title.trim(), body: body });
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
            placeholder="✨ Enter an awesome note title..."
          />
          {errors.title && <span className="error-message">{errors.title}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="body">Content *</label>
          <div className={`quill-wrapper ${errors.body ? 'error' : ''}`}>
            <ReactQuill
              theme="snow"
              value={body}
              onChange={(value) => {
                setBody(value);
                if (errors.body) setErrors({ ...errors, body: '' });
              }}
              modules={modules}
              formats={formats}
              placeholder="📝 Write your note content here with rich formatting..."
            />
          </div>
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
