const path = require('path');
const RuleTester = require('eslint').RuleTester;

module.exports = new RuleTester({
  parser: path.join(__dirname, '..', '..', 'node_modules', 'babel-eslint'),
  parserOptions: {}
});
