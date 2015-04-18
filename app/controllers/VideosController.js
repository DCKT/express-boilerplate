import Video from '../models/Video';

export default {
  index: {
    get(req, res) {
      Video.findAll()
        .then(videos => {
          res.locals.videos = videos;
          res.render('videos/index');
        })
        .catch(err => {
          console.error(err);
        })
    }
  },
  show: {
    get(req, res) {
      res.render('videos/show');
    }
  }
}