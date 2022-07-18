import rule from '../../src/rules/kebab-case-enforce.js';
import tester from './rule-tester.js';

tester.run('kebab-case-enforce', rule, {
  valid: [
    {
      filename: 'my-component.js',
      code: ''
    },
    {
      // ignore json files
      filename: 'MyComponent.json',
      code: ''
    },
    {
      // ignore json files
      filename: 'my_component.json',
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
