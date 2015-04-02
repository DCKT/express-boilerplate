import Book from '../models/Book';


export default {
  index: {
    get(req, res) {

      Book.findAll(function (books) {
        res.locals.title = "Home";
        res.locals.books = books;

        res.render('index');
      });
    }
  }
}