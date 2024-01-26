import { Linter, type Rule } from "eslint";

import * as parser from "@typescript-eslint/parser";
import { ESLintUtils } from "@typescript-eslint/utils";

const customRule = ESLintUtils.RuleCreator.withoutDocs({
  create(context) {
    return {
      AwaitExpression(node) {
        const services = ESLintUtils.getParserServices(context);
        const type = services.getTypeAtLocation(node.argument);

        if (!type.getProperty("then")) {
          context.report({
            messageId: "await",
            node: node.argument,
          });
        }
      },
    };
  },
  meta: {
    docs: {
      description: "Disallow awaiting a value that is not a Thenable",
    },
    messages: {
      await: 'Unexpected `await` of a non-Promise (non-"Thenable") value.',
    },
    type: "suggestion",
    schema: [],
  },
  defaultOptions: [],
});

const linter = new Linter();

linter.defineParser("@typescript-eslint/parser", parser as Linter.ParserModule);

linter.defineRule("no-for-of-array", customRule as unknown as Rule.RuleModule);

const results = linter.verify(
  `await console.log("Hello, world!");`,
  {
    parser: "@typescript-eslint/parser",
    parserOptions: {
      EXPERIMENTAL_useProjectService: true,
    },
    rules: {
      "no-for-of-array": "error",
    },
  },
  "index.ts"
);

console.log(results);
