// routes/clientRoutes.js

const express = require('express');
const { getClients, addClient } = require('../models/clientModel');

const router = express.Router();

// GET /api/clients - Return all clients as JSON
router.get('/', (req, res) => {
  res.json(getClients());
});

// POST /api/clients - Add a new client and return it as JSON
router.post('/', (req, res) => {
  const newClient = addClient(req.body);
  res.status(201).json(newClient);
});

module.exports = router;
