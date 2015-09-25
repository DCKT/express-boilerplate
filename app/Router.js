module.exports = [
  {
    path: '/',
    handler: rootRequire('app/routes/IndexRoute'),
  },
  {
    path: '/books',
    handler: rootRequire('app/routes/BooksRoute'),
  },
];
