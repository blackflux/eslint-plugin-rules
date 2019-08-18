const expect = require('chai').expect;
const index = require('../src/index');

it('Test Exported Rules', () => {
  expect(Object.keys(index.rules).sort()).to.deep.equal([
    'enforce-optimal-require',
    'istanbul-prevent-ignore',
    'jasmine-expect-two-arguments',
    'kebab-case-enforce',
    'prevent-typeof-object'
  ]);
});
