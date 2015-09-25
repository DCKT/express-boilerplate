'use strict';

/**
* Books Route
* path: /books
******************** */

let express    = require('express');
let Controller = rootRequire('app/controllers/BooksController');
let router     = express.Router();

router.get('/', Controller.index.get);
router.get('/new', Controller.new.get);
router.post('/new', Controller.new.post);

module.exports = router;
