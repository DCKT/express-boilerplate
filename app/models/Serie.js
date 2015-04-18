import ORM from './ORM';
import query from '../../utils/query';

ORM.use("series");

export default class Serie extends ORM {

  constructor(opt) {
    this.title = opt.title;
    this.description = opt.description;
    
    return this;
  }

  get serie() {
    return {
      name: this.name,
      description: this.description
    }
  }

  save() {
    return super.save(this.book);
  }
}