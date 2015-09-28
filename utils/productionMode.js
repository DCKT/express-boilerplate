module.exports = function() {
  global.productMode = process.env.NODE_ENV && process.env.NODE_ENV === 'production';
};
