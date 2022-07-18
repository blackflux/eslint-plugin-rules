import rule from '../../src/rules/istanbul-prevent-ignore.js';
import tester from './rule-tester.js';

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
