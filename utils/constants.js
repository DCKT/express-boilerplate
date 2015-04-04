import path from 'path';

export default {
  PATHS: {
    routes: `${path.dirname(require.main.filename)}/../app/routes`,
    controller: `${path.dirname(require.main.filename)}/../app/controllers`
  }
}