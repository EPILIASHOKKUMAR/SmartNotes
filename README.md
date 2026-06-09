# 📝 Notes App with Search

A modern, full-stack Notes Application built with React.js and Node.js/Express. This application allows users to create, view, edit, delete, and search notes with a clean, responsive user interface.

## ✨ Features

- **Create Notes**: Add new notes with title and content
- **View Notes**: Display all notes sorted by most recent first
- **Edit Notes**: Update existing notes with real-time reflection
- **Delete Notes**: Remove notes with confirmation dialog
- **Search Notes**: Case-insensitive, substring-based search across title and content
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Real-time Validation**: Form validation with error messages
- **Professional UI**: Clean, modern interface with smooth animations

## 🛠️ Technology Stack

### Frontend
- **React.js** (v18.2.0) - UI library
- **Vite** - Build tool and dev server
- **CSS3** - Styling with modern features
- **ES6+** - Modern JavaScript

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **UUID** - Unique ID generation
- **CORS** - Cross-origin resource sharing

### Storage
- **In-memory JavaScript arrays** (no external database)

## 📁 Project Structure

```
notes-app/
│
├── client/                      # Frontend React application
│   ├── src/
│   │   ├── components/         # Reusable React components
│   │   │   ├── Header.jsx
│   │   │   ├── Header.css
│   │   │   ├── SearchBar.jsx
│   │   │   ├── SearchBar.css
│   │   │   ├── NoteForm.jsx
│   │   │   ├── NoteForm.css
│   │   │   ├── NoteCard.jsx
│   │   │   ├── NoteCard.css
│   │   │   ├── NotesList.jsx
│   │   │   └── NotesList.css
│   │   ├── pages/              # Page components
│   │   │   ├── NotesPage.jsx
│   │   │   └── NotesPage.css
│   │   ├── services/           # API service layer
│   │   │   └── api.js
│   │   ├── App.jsx             # Root component
│   │   ├── App.css             # Global styles
│   │   └── main.jsx            # Entry point
│   ├── index.html              # HTML template
│   ├── vite.config.js          # Vite configuration
│   └── package.json            # Frontend dependencies
│
├── server/                      # Backend Express application
│   ├── controllers/            # Business logic
│   │   └── notesController.js
│   ├── routes/                 # API routes
│   │   └── notesRoutes.js
│   ├── data/                   # Data storage
│   │   └── notesData.js
│   ├── server.js               # Server entry point
│   └── package.json            # Backend dependencies
│
└── README.md                    # Project documentation
```

## 🚀 Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### 1. Clone the Repository
```bash
git clone <repository-url>
cd notes-app
```

### 2. Install Backend Dependencies
```bash
cd server
npm install
```

### 3. Install Frontend Dependencies
```bash
cd ../client
npm install
```

## ▶️ Running the Application

You need to run both the backend server and frontend development server simultaneously.

### Terminal 1: Start Backend Server
```bash
cd server
npm start
```
The backend server will run on **http://localhost:5000**

### Terminal 2: Start Frontend Development Server
```bash
cd client
npm run dev
```
The frontend will run on **http://localhost:3000** and automatically open in your browser.

## 📡 API Documentation

### Base URL
```
http://localhost:5000/api
```

### Endpoints

#### 1. Get All Notes
```http
GET /api/notes
```
**Response:**
```json
[
  {
    "id": "123e4567-e89b-12d3-a456-426614174000",
    "title": "My First Note",
    "body": "This is the content of my note",
    "createdAt": "2026-06-09T18:30:00.000Z"
  }
]
```

#### 2. Create Note
```http
POST /api/notes
Content-Type: application/json

{
  "title": "Note Title",
  "body": "Note content"
}
```
**Response:** Created note object (201)

#### 3. Update Note
```http
PUT /api/notes/:id
Content-Type: application/json

{
  "title": "Updated Title",
  "body": "Updated content"
}
```
**Response:** Updated note object (200)

#### 4. Delete Note
```http
DELETE /api/notes/:id
```
**Response:** 
```json
{
  "message": "Note deleted successfully"
}
```

#### 5. Search Notes
```http
GET /api/notes/search?q=keyword
```
**Query Parameters:**
- `q` - Search query (case-insensitive, substring match)

**Response:** Array of matching notes

**Search Examples:**
- Search: `python` → Matches "Python Basics", "Learn PYTHON", "python programming"
- Search: `react` → Matches "React Tutorial", "Learning REACT hooks"

## 🎨 UI Components

### Header
- Application title and tagline
- Gradient background

### SearchBar
- Real-time search input
- Clear button
- Search icon

### NoteForm
- Title and body inputs
- Validation with error messages
- Create/Update mode
- Cancel button for editing

### NoteCard
- Note title and content display
- Created date timestamp
- Edit and delete action buttons
- Hover effects

### NotesList
- Grid layout (responsive)
- Loading spinner
- Empty state messages
- Search results count

## ✅ Acceptance Criteria

All requirements have been implemented:

- ✓ Create Note works
- ✓ View Notes works (sorted by most recent)
- ✓ Update Note works
- ✓ Delete Note works (with confirmation)
- ✓ Search API works
- ✓ Search is case-insensitive
- ✓ Search supports substring matching
- ✓ Searches both title and body
- ✓ Responsive UI
- ✓ Clean, modular architecture
- ✓ Professional code organization
- ✓ Error handling
- ✓ Loading states
- ✓ Form validation
- ✓ README documentation

## 🎯 Usage Guide

1. **Creating a Note**: Fill in the title and body fields, then click "Create Note"
2. **Viewing Notes**: All notes are displayed in a grid, sorted by most recent
3. **Editing a Note**: Click the ✏️ icon on any note, modify the form, then click "Update Note"
4. **Deleting a Note**: Click the 🗑️ icon and confirm the deletion
5. **Searching Notes**: Type in the search bar to filter notes in real-time

## 🔧 Development Scripts

### Backend
- `npm start` - Start production server
- `npm run dev` - Start development server with nodemon (auto-restart)

### Frontend
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## 🌟 Features Showcase

### Search Functionality
- **Case-Insensitive**: "python" matches "Python", "PYTHON", "PyThOn"
- **Substring Matching**: "react" matches "React Tutorial", "Learning React"
- **Multi-field Search**: Searches both title and body content
- **Real-time Results**: Updates as you type

### Form Validation
- Required field validation
- Error messages display
- Real-time error clearing
- Prevents empty submissions

### User Experience
- Smooth animations and transitions
- Loading indicators
- Empty state messages
- Confirmation dialogs
- Responsive design
- Professional typography

## 📦 Dependencies

### Backend
```json
{
  "express": "^4.18.2",
  "cors": "^2.8.5",
  "uuid": "^9.0.0"
}
```

### Frontend
```json
{
  "react": "^18.2.0",
  "react-dom": "^18.2.0",
  "vite": "^5.0.0",
  "@vitejs/plugin-react": "^4.2.1"
}
```

## 🚀 Ready for Submission

This project is complete and ready for:
- ✅ GitHub submission
- ✅ Technical assessment review
- ✅ Code review
- ✅ Demonstration
- ✅ Further development

## 📝 Notes

- Data is stored in-memory and will be lost when the server restarts
- No authentication or authorization implemented
- Single-user application
- Designed for local development and demonstration

## 🤝 Contributing

This is a technical assessment project. If you'd like to contribute:
1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📄 License

MIT License - feel free to use this project for learning and development.

---

**Built with ❤️ for technical assessment submission**
