# 📝 Smart Notes App

A modern full-stack notes application with search functionality built using React and Node.js.

## ✨ Features

- Create, edit, and delete notes
- Rich text formatting (bold, italic, colors, lists, headers)
- Search notes by title or content
- Automatic date tracking
- Beautiful purple gradient design
- Responsive UI for mobile and desktop

## 🛠️ Tech Stack

**Frontend:** React.js, Vite, React Quill  
**Backend:** Node.js, Express.js  
**Storage:** In-memory (no database required)

## 📁 Project Structure

```
notes-app/
├── FRONTEND/        # React application
└── BACKEND/         # Express server
```

## 🚀 Quick Start

### Prerequisites
- Node.js installed on your system

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/EPILIASHOKKUMAR/SmartNotes.git
cd SmartNotes
```

2. **Install backend dependencies**
```bash
cd BACKEND
npm install
```

3. **Install frontend dependencies**
```bash
cd ../FRONTEND
npm install
```

### Running the App

**Start Backend (Terminal 1):**
```bash
cd BACKEND
npm start
```
Server runs on: http://localhost:5000

**Start Frontend (Terminal 2):**
```bash
cd FRONTEND
npm run dev
```
App opens at: http://localhost:5173

## 🎯 How It Works

1. **Create Note** - Fill in title and content, click "Create Note"
2. **Search** - Type in the search bar to filter notes instantly
3. **Edit** - Click the ✏️ icon to modify a note
4. **Delete** - Click the 🗑️ icon to remove a note

## 📡 API Endpoints

```
GET    /api/notes              Get all notes
POST   /api/notes              Create a note
PUT    /api/notes/:id          Update a note
DELETE /api/notes/:id          Delete a note
GET    /api/notes/search?q=    Search notes
```

## 🎨 Key Technologies

- **React Components** - Modular UI design
- **Rich Text Editor** - Format notes with styling
- **REST API** - Clean backend architecture
- **CSS Animations** - Smooth user experience
- **Case-insensitive Search** - Find notes easily

## 📝 Project Requirements Met

✅ Frontend UI to create notes  
✅ Search bar functionality  
✅ Backend CRUD APIs  
✅ Search endpoint  
✅ In-memory storage  
✅ Case-insensitive substring search  
✅ Clean, responsive UI  

## 🌟 Bonus Features

- Rich text formatting with multiple options
- Date and time tracking for notes
- Duplicate title prevention
- Smooth animations and transitions
- Edit/Delete confirmation dialogs
- Empty state and loading indicators

## 📦 Dependencies

**Frontend:** React, React Quill, Vite  
**Backend:** Express, CORS, UUID

## 🎓 Learning Outcomes

This project demonstrates:
- Full-stack development skills
- RESTful API design
- React component architecture
- State management
- API integration
- Responsive design
- Modern JavaScript (ES6+)

---

**Made with ❤️ as a technical assessment project**
