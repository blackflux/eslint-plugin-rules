import parser from '@babel/eslint-parser';
import { RuleTester } from 'eslint';

export default new RuleTester({
  parser,
  parserOptions: {}
});
