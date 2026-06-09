# 🚀 Quick Start Guide

Follow these simple steps to get the Notes App running:

## Step 1: Install Backend Dependencies
```bash
cd server
npm install
```

## Step 2: Install Frontend Dependencies
```bash
cd ../client
npm install
```

## Step 3: Start the Backend Server
Open a terminal and run:
```bash
cd server
npm start
```
✅ Backend running on http://localhost:5000

## Step 4: Start the Frontend
Open a **second terminal** and run:
```bash
cd client
npm run dev
```
✅ Frontend running on http://localhost:3000

## That's it! 🎉

The app should automatically open in your browser. If not, navigate to:
**http://localhost:3000**

## Test the Search Feature

Try creating notes with these titles:
- "Python Tutorial"
- "JavaScript Basics"
- "React Learning"

Then search for:
- "python" ✓
- "PYTHON" ✓
- "react" ✓
- "learn" ✓

All searches are case-insensitive and work with substring matching!

## Troubleshooting

**Port already in use?**
- Backend: Change PORT in server/server.js
- Frontend: Change port in client/vite.config.js

**Connection refused?**
- Make sure the backend server is running first
- Check that backend is on port 5000

---

Need more details? Check the full README.md
