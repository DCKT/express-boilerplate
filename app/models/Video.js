import ORM from './ORM';

ORM.use("videos");

export default class Video extends ORM {

  constructor(opt) {
    this.title = opt.title;
    this.description = opt.description;
    this.video_id = opt.video_id;
    this.serie_id = opt.serie_id;

    return this;
  }

  get video() {
    var { title, description, video_id, serie_id } = this;

    return {
      title,
      description,
      video_id,
      serie_id
    };
  }

  save() {
    return super.save(this.video);
  }
}