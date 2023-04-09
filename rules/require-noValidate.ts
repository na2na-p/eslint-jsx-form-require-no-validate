import { TSESLint } from "@typescript-eslint/experimental-utils";
// @ts-ignore
import { hasProp } from 'jsx-ast-utils';

const noValidate: TSESLint.RuleModule<"noValidate", []> = {
  meta: {
		
    type: "suggestion",
    messages: {
      noValidate: "{{ message }}",
    },
    schema: [],
		fixable: 'code',
  },
  create: (context) => {
    return {
      JSXOpeningElement(node) {
				const noValidate = hasProp(node.attributes, 'noValidate');
        if (
					// @ts-ignore
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
						// @ts-ignore
            message: 'Form element must have a noValidate attribute',
          });
        }
      },
    };
  },
};

module.exports = noValidate;

export default noValidate;
