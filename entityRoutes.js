const express = require('express');
const router = express.Router();
const entityController = require('../controllers/entityController');

// Route pour créer une entité
router.post('/entities', entityController.createEntity);

module.exports = router;
