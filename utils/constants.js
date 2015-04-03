import path from 'path';

export default {
  PATHS: {
    routes: `${path.dirname(require.main.filename)}/../app/routes`,
    controllers: `${path.dirname(require.main.filename)}/../app/controllers`
  }
}