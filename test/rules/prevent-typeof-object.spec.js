const rule = require('../../src/rules/prevent-typeof-object');
const tester = require('./rule-tester');

tester.run('prevent-typeof-object', rule, {
  valid: [
    'typeof {} === "string"',
    'typeof {} > "object"',
    'new String() instanceof Object',
    'typeof {} === {}',
    '!true'
  ],
  invalid: [
    {
      code: 'typeof {} === "object"',
      errors: ['Please use "instanceof Object" instead of "typeof" to check for Object']
    },
    {
      code: '"object" === typeof {}',
      errors: ['Please use "instanceof Object" instead of "typeof" to check for Object']
    },
    {
      code: 'typeof {} === `object`',
      errors: ['Please use "instanceof Object" instead of "typeof" to check for Object']
    }
  ]
});
