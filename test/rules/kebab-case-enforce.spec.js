const RuleTester = require('eslint').RuleTester;
const rule = require('../../src/rules/kebab-case-enforce');

const tester = new RuleTester({
  parser: 'babel-eslint',
  parserOptions: {}
});

tester.run('kebab-case-enforce', rule, {
  valid: [
    {
      filename: 'my-component.js',
      code: ''
    }
  ],
  invalid: [
    {
      filename: 'MyComponent.js',
      code: '',
      errors: ['Use Kebab Case. Upper Case found in MyComponent.js']
    },
    {
      filename: 'my_component.js',
      code: '',
      errors: ['Use Kebab Case. Invalid Underscore Found in my_component.js']
    }
  ]
});
