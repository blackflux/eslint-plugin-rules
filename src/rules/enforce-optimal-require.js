const path = require('path');

const isStaticRequire = (node) => node
    && node.callee
    && node.callee.type === 'Identifier'
    && node.callee.name === 'require'
    && node.arguments.length === 1
    && node.arguments[0].type === 'Literal'
    && typeof node.arguments[0].value === 'string';

const isOptimalPath = (context, node, actualNode) => {
  const actual = actualNode.value;
  if (actual[0] === '.') {
    const filePath = context.getFilename();
    if (filePath !== '<text>') {
      const folder = path.dirname(filePath);
      const expected = `./${path.relative(folder, path.join(folder, actual))}`
        .replace(/^\.\/\.\.\//, '../')
        .replace(/\.{js,json}/g, '');
      if (expected !== actual) {
        context.report({
          node,
          message: `Non optimal import path detected. Please use "${expected}"`,
          fix: (fixer) => fixer.replaceText(actualNode, `'${expected}'`)
        });
      }
    }
  }
};


module.exports = {
  create(context) {
    return {
      ImportDeclaration(node) {
        isOptimalPath(context, node, node.source);
      },
      CallExpression(node) {
        if (isStaticRequire(node)) {
          isOptimalPath(context, node, node.arguments[0]);
        }
      }
    };
  }
};
