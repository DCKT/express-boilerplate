import Serie from '../models/Serie';

export default {
  index: {
    get(req, res) {
      Serie.findAll()
        .then(series => {
          res.locals.series = series;
          res.locals.title = "Series";
          res.render('index');
        })
        .catch(err => {
          console.error(err);
        })
    }
  }
}