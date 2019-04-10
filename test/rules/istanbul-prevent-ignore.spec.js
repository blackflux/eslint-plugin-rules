const RuleTester = require('eslint').RuleTester;
const rule = require('../../src/rules/istanbul-prevent-ignore');

const tester = new RuleTester({
  parser: 'babel-eslint',
  parserOptions: {}
});

tester.run('istanbul-prevent-ignore', rule, {
  valid: [
    '/* some comment */',
    '// istanbul ignore'
  ],
  invalid: [
    {
      code: '/* istanbul ignore */',
      errors: ['Not allowed to ignore coverage in this file.']
    }
  ]
});
