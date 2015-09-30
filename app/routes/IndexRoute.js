'use strict';

/**
* Home Route
* path: /
******************** */

let express         = require('express');
import IndexController from './../../app/controllers/IndexController';
let router          = express.Router();

// router.get('/', IndexController.index);

module.exports = router;
