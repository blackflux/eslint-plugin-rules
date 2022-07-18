import { expect } from 'chai';
import { describe } from 'node-tdd';
import index from '../src/index.js';

describe('Testing index', () => {
  it('Test Exported Rules', () => {
    expect(Object.keys(index.rules).sort()).to.deep.equal([
      'c8-prevent-ignore',
      'istanbul-prevent-ignore',
      'kebab-case-enforce',
      'prevent-typeof-object'
    ]);
  });
});
