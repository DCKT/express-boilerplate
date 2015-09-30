'use strict';

let Book = rootRequire('app/models/Book');

export default class BookController {
  static index(req, res) {
    Book.findAll()
      .then(books => {
        res.locals.books = books;
        res.render('books/index');
      })
      .catch(err => {
        console.error(err);
      });
  }
  static newView(req, res) {
    res.render('books/new');
  }
  static new(req, res) {
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
    }
}
