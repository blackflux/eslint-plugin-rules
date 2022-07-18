export default {
  create(context) {
    return {
      UnaryExpression(node) {
        if (node.type === 'UnaryExpression' && node.operator === 'typeof') {
          const parent = context.getAncestors().pop();
          if (parent.type === 'BinaryExpression' && ['==', '===', '!=', '!=='].includes(parent.operator)) {
            const sibling = parent.left === node ? parent.right : parent.left;

            if (sibling.type === 'Literal' || (sibling.type === 'TemplateLiteral' && !sibling.expressions.length)) {
              const value = sibling.type === 'Literal' ? sibling.value : sibling.quasis[0].value.cooked;

              if (value === 'object') {
                context.report({
                  node: sibling,
                  message: (
                    'Please use "obj?.constructor === Object" or "obj instanceof Object" '
                    + 'instead of `typeof obj === "object"`'
                  )
                });
              }
            }
          }
        }
      }
    };
  }
};
