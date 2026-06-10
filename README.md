# Notes App with Search

A simple notes application where you can create, edit, delete and search notes.

## Features

- Add new notes
- Edit existing notes
- Delete notes
- Search notes by title or content
- Rich text formatting

## Technologies Used

- **Frontend**: React.js
- **Backend**: Node.js with Express
- **Storage**: In-memory (array)

## Setup Instructions

### 1. Install Dependencies

**Backend:**
```bash
cd BACKEND
npm install
```

**Frontend:**
```bash
cd FRONTEND
npm install
```

### 2. Run the Application

**Start Backend Server:**
```bash
cd BACKEND
npm start
```
The backend will run on `http://localhost:5000`

**Start Frontend:**
```bash
cd FRONTEND
npm run dev
```
The app will open at `http://localhost:5173`

## How to Use

1. Enter a title and content in the form
2. Click "Create Note" to add it
3. Use the search bar to find notes
4. Click edit icon to modify a note
5. Click delete icon to remove a note

## API Endpoints

- `GET /api/notes` - Get all notes
- `POST /api/notes` - Create a note
- `PUT /api/notes/:id` - Update a note
- `DELETE /api/notes/:id` - Delete a note
- `GET /api/notes/search?q=keyword` - Search notes

## Project Structure

```
FRONTEND/    - React frontend
BACKEND/     - Express backend
```

## Requirements Met

✓ Create notes  
✓ Search functionality  
✓ CRUD operations  
✓ Case-insensitive search  
✓ Clean UI  

---

**Note:** Data is stored in memory, so it will be lost when the server restarts.
