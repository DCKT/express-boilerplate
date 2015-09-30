'use strict';

/**
* Books Route
* path: /books
******************** */

let express        = require('express');
import BookController from './../../app/controllers/BookController';
let router         = express.Router();

router.get('/', BookController.index);
router.get('/new', BookController.newView);
router.post('/new', BookController.new);

module.exports = router;
