export default {
  index: {
    get(req, res) {
      res.locals.title = "Home";
      res.render('index');
    }
  }
}