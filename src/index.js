import c8PreventIgnore from './rules/c8-prevent-ignore.js';
import istanbulPreventIgnore from './rules/istanbul-prevent-ignore.js';
import kebabCaseEnforce from './rules/kebab-case-enforce.js';
import preventTypeofObject from './rules/prevent-typeof-object.js';

export default {
  rules: {
    'c8-prevent-ignore': c8PreventIgnore,
    'istanbul-prevent-ignore': istanbulPreventIgnore,
    'kebab-case-enforce': kebabCaseEnforce,
    'prevent-typeof-object': preventTypeofObject
  }
};
