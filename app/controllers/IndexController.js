import Book from '../models/Book';

export default {
  index: {
    get(req, res) {
      Book.findAll()
        .then(books => {
          res.locals.books = books;
          res.locals.title = "Home";
          res.render('index');
        })
        .catch(err => {
          console.error(err);
        })
    }
  }
}