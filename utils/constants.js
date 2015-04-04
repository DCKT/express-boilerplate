import path from 'path';

export default {
  PATHS: {
    route: `${path.dirname(require.main.filename)}/../app/routes`,
    controller: `${path.dirname(require.main.filename)}/../app/controllers`
  }
}