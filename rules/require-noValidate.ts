import { TSESLint } from "@typescript-eslint/experimental-utils";
// HACK: 型定義が提供されていないため。
// @ts-ignore
import { hasProp } from 'jsx-ast-utils';

export const noValidate: TSESLint.RuleModule<"noValidate", []> = {
  meta: {
    type: "suggestion",
    messages: {
			noValidate: 'Form element must have a noValidate attribute',
    },
    schema: [],
		fixable: 'code',
  },
  create: (context) => {
    return {
      JSXOpeningElement(node) {
				const noValidate = hasProp(node.attributes, 'noValidate');
				if (!(node.name.type === 'JSXIdentifier')) return;
        if (
          node.name.name === 'form' &&
          !noValidate
        ) {
          context.report({
						node,
            fix(fixer) {
              return fixer.insertTextAfter(
                node.attributes[node.attributes.length - 1],
                ' noValidate'
              );
            },
						messageId: 'noValidate',
          });
        }
      },
    };
  },
};

module.exports = noValidate;
