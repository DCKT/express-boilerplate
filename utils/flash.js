'use strict';

module.exports = function(req, res, next) {
  var flash = req.session.flash;

  if (flash && !flash.done) {
    res.locals.flash = flash;
    flash.done = true;
  }

  next();
};
