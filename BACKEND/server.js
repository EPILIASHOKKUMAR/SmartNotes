const express = require('express');
const cors = require('cors');
require('dotenv').config();
const notesRoutes = require('./routes/notesRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use('/api/notes', notesRoutes);

app.get('/api/health', (req, res) => {
  res.json({ status: 'Server is running' });
});

app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});
