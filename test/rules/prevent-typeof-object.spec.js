import rule from '../../src/rules/prevent-typeof-object.js';
import tester from './rule-tester.js';

tester.run('prevent-typeof-object', rule, {
  valid: [
    'typeof {} === "string"',
    'typeof {} > "object"',
    'typeof {} === {}',
    'car instanceof Car',
    'true && false',
    '!true'
  ],
  invalid: [
    {
      code: 'typeof {} === "object"',
      errors: ['Please use "obj?.constructor === Object" instead of `typeof obj === "object"`']
    },
    {
      code: '"object" === typeof {}',
      errors: ['Please use "obj?.constructor === Object" instead of `typeof obj === "object"`']
    },
    {
      code: 'new String() instanceof Object',
      errors: ['Please use "obj?.constructor === Object" instead of `obj instanceof Object`']
    },
    {
      code: 'new String() instanceof Array',
      errors: ['Please use "obj?.constructor === Object" instead of `obj instanceof Object`']
    },
    {
      code: 'typeof {} === `object`',
      errors: ['Please use "obj?.constructor === Object" instead of `typeof obj === "object"`']
    }
  ]
});
