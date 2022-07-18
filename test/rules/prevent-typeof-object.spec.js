import rule from '../../src/rules/prevent-typeof-object.js';
import tester from './rule-tester.js';

const message = (
  'Please use "obj?.constructor === Object" or "obj instanceof Object" '
  + 'instead of `typeof obj === "object"`'
);

tester.run('prevent-typeof-object', rule, {
  valid: [
    'typeof {} === "string"',
    'typeof {} > "object"',
    'typeof {} === {}',
    'car instanceof Car',
    'true && false',
    'new String() instanceof Object',
    'new String() instanceof Array',
    '!true'
  ],
  invalid: [
    {
      code: 'typeof {} === "object"',
      errors: [message]
    },
    {
      code: '"object" === typeof {}',
      errors: [message]
    },
    {
      code: 'typeof {} === `object`',
      errors: [message]
    }
  ]
});
