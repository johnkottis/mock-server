// server.js

const express = require('express');
const app = express();
const PORT = 5000;

// Middleware to parse JSON bodies
app.use(express.json());

// Import routes
const colleagueRoutes = require('./routes/colleagueRoutes');
const clientRoutes = require('./routes/clientRoutes');

// Use routes
app.use('/api/colleagues', colleagueRoutes);
app.use('/api/clients', clientRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
