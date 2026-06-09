# 🚀 Quick Start Guide

Get the Notes App running in under 2 minutes!

## Step 1: Install Dependencies

### Backend
```bash
cd server
npm install
```

### Frontend
```bash
cd client
npm install
```

## Step 2: Start the Application

### Terminal 1 - Backend (Port 5000)
```bash
cd server
npm start
```
✅ Backend running at http://localhost:5000

### Terminal 2 - Frontend (Port 3000)
```bash
cd client
npm run dev
```
✅ Frontend running at http://localhost:3000

## Step 3: Use the App

The app will automatically open in your browser at http://localhost:3000

### Quick Test:
1. Create a note with title "Python Tutorial" and body "Learn Python basics"
2. Create another note with title "JavaScript Guide"
3. Search for "python" - case-insensitive search works!
4. Edit a note by clicking the ✏️ icon
5. Delete a note by clicking the 🗑️ icon

## Troubleshooting

**Port already in use?**
- Backend: Change PORT in `server/server.js`
- Frontend: Change port in `client/vite.config.js`

**CORS errors?**
- Make sure backend is running on port 5000
- Check that CORS is enabled in `server/server.js`

**Module not found?**
- Run `npm install` in both server and client directories

## What's Next?

Check out the full [README.md](README.md) for:
- Complete API documentation
- Architecture details
- Feature descriptions
- Development tips

---

**Happy Note-Taking! 📝**
