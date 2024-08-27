const express = require('express');
const { addColleague, getColleagues } = require('../models/colleagueModel');

const router = express.Router();

// GET /api/colleagues
router.get('/', (req, res) => {
  res.json(getColleagues());
});

// POST /api/colleagues
router.post('/', (req, res) => {
  const newColleague = addColleague(req.body);
  res.status(201).json(newColleague);
});

module.exports = router;
