import ORM from './ORM';
import query from '../../utils/query';

ORM.use("books");

export default class Book extends ORM {

  constructor(opt) {
    this.title = opt.title;

    return this;
  }

  get book() {
    return {
      title: this.title
    }
  }

  save() {
    return super.save(this.book);
  }
}