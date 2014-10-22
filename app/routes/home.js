/**
* Home Route
* - /
******************** */

var express = require('express'),
controller  = require('../controllers/HomeController'),
router      = express.Router();

router.get('/', controller.index);

module.exports = router;