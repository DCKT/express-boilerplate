module.exports = function() {
  global.PROD_ENV = process.env.NODE_ENV && process.env.NODE_ENV === 'production';
};
