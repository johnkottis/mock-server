// routes/colleagueRoutes.js

const express = require('express');
const { getColleagues, addColleague } = require('../models/colleagueModel');

const router = express.Router();

// GET /api/colleagues - Return all colleagues as JSON
router.get('/', (req, res) => {
  res.json(getColleagues());
});

// POST /api/colleagues - Add a new colleague and return it as JSON
router.post('/', (req, res) => {
  const newColleague = addColleague(req.body);
  res.status(201).json(newColleague);
});

module.exports = router;
