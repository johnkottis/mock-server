const express = require('express');
const { addClient, getClients } = require('../models/clientModel');

const router = express.Router();

// GET /api/clients
router.get('/', (req, res) => {
  res.json(getClients());
});

// POST /api/clients
router.post('/', (req, res) => {
  const newClient = addClient(req.body);
  res.status(201).json(newClient);
});

module.exports = router;
