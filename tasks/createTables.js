'use strict';
require('../utils/rootRequire')();
let Book = rootRequire('app/models/Book');

Book.sync().then(() => {
  console.log('Creating table Book');
});
