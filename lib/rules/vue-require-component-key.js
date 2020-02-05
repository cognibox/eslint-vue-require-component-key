function isKeyAttribute(attribute) {
  return attribute.key.name === 'key' || (attribute.key.type === 'VDirectiveKey' && attribute.key.argument.name === 'key');
}

module.exports = {
  meta: {
    type: 'problem',
    docs: {
      description: '',
      category: '',
      recommended: true,
      url: 'https://github.com/cognibox/eslint-vue-require-component-key',
    },
  },
  create: function(context) {
    return context.parserServices.defineTemplateBodyVisitor(
      {
        "VElement[name='component']": function(node) {
          if (!node.startTag.attributes.some((attribute) => isKeyAttribute(attribute))) {
            context.report({
              node: node.startTag,
              loc: node.startTag.loc,
              message: 'Dynamic component elements expected to have a "v-bind:key" directive.',
            });
          }
        },
      },
    );
  },
};
