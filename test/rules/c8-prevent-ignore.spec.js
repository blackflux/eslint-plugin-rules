import rule from '../../src/rules/c8-prevent-ignore.js';
import tester from './rule-tester.js';

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
