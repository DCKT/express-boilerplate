import query from '../../utils/query';

export default {
  findAll(cb) {
    return query('SELECT * FROM books');
  },
  findById(id) {
    return query('SELECT * FROM books WHERE id = ?', [id]);
  }
}