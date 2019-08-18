const path = require('path');

const isStaticRequire = (node) => node
    && node.callee
    && node.callee.type === 'Identifier'
    && node.callee.name === 'require'
    && node.arguments.length === 1
    && node.arguments[0].type === 'Literal'
    && typeof node.arguments[0].value === 'string';

const isOptimalPath = (context, node, requireName) => {
  if (requireName[0] === '.') {
    const filePath = context.getFilename();
    if (filePath !== '<text>') {
      const folder = path.dirname(filePath);
      const expected = `./${path.relative(folder, path.join(folder, requireName))}`
        .replace(/^\.\/\.\.\//, '../')
        .replace(/\.{js,json}/g, '');
      if (expected !== requireName) {
        context.report({ node, message: `Non optimal import path detected. Please use "${expected}"` });
      }
    }
  }
};


module.exports = {
  create(context) {
    return {
      ImportDeclaration(node) {
        isOptimalPath(context, node, node.source.value);
      },
      CallExpression(node) {
        if (isStaticRequire(node)) {
          isOptimalPath(context, node, node.arguments[0].value);
        }
      }
    };
  }
};
