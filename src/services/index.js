const users = require('./users/users.service.js');
const auth = require('./auth/auth.service.js');
const test = require('./test/test.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function(app) {
  app.configure(users);
  app.configure(auth);
  app.configure(test);
};