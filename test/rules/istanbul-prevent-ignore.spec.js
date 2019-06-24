const rule = require('../../src/rules/istanbul-prevent-ignore');
const tester = require('./rule-tester');

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
