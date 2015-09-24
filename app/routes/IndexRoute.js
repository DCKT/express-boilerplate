'use strict';

/**
* Home Route
* path: /
******************** */

let express    = require('express');
let Controller = require('../controllers/IndexController');
let router     = express.Router();

router.get('/', Controller.index.get);

module.exports = router;
