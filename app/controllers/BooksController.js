'use strict';
let Book = rootRequire('app/models/Book');

module.exports = {
  index: {
    get(req, res) {
      Book.findAll()
        .then(books => {
          res.locals.books = books;
          res.render('books/index');
        })
        .catch(err => {
          console.error(err);
        });
    },
  },
  new: {
    get(req, res) {
      res.render('books/new');
    },

    post(req, res) {
      let { title } = req.body;

      Book
        .create({ title })
        .then(() => {

          req.session.flash = {
            type: 'success',
            message: 'Book added !',
          };

          res.redirect('/books');
        })
        .catch(err => {
          console.error(err);
        });
    },
  },
};
