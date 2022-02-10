const rule = require('../../src/rules/c8-prevent-ignore');
const tester = require('./rule-tester');

tester.run('c8-prevent-ignore', rule, {
  valid: [
    '/* some comment */',
    '// c8 ignore'
  ],
  invalid: [
    {
      code: '/* c8 ignore */',
      errors: ['Not allowed to ignore coverage in this file.']
    }
  ]
});
