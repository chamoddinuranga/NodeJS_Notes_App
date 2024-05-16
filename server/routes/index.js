const express   = require('express');
const router    = express.Router();
const mianController = require('../controllers/mainController');

// App Routs
router.get('/', mianController.homepage);

module.exports = router;