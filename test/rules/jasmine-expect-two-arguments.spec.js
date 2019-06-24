const rule = require('../../src/rules/jasmine-expect-two-arguments');
const tester = require('./rule-tester');

tester.run('jasmine-expect-two-arguments', rule, {
  valid: [
    'expect(true).to.equal(true);',
    "expect(true, 'error').to.equal(true);"
  ],
  invalid: [
    {
      code: "expect(true, 'error1', 'error2').to.equal(true);",
      errors: ['More than two arguments passed to expect()']
    },
    {
      code: 'expect(true, {}).to.equal(true);',
      errors: ['Expected second expect() argument to be debug string']
    },
    {
      code: 'expect().to.equal(true);',
      errors: ['No arguments passed to expect()']
    }
  ]
});
