import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="app-header">
      <div className="header-shapes">
        <div className="shape"></div>
        <div className="shape"></div>
        <div className="shape"></div>
      </div>
      <div className="header-content">
        <h1>
          <span className="header-emoji">📝</span>
          SmartNotes
        </h1>
        <p>Your intelligent note-taking companion</p>
        <div className="header-features">
          <span className="feature-badge">⚡ Lightning Fast</span>
          <span className="feature-badge">🔍 Smart Search</span>
          <span className="feature-badge">✨ Beautiful UI</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
