'use strict';

let path = require('path');

module.exports = {
  PATHS: {
    route: `${path.dirname(require.main.filename)}/../app/routes`,
    controller: `${path.dirname(require.main.filename)}/../app/controllers`,
    model: `${path.dirname(require.main.filename)}/../app/models`,
  },
};
