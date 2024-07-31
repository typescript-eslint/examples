import path from "node:path";
import tseslint from "typescript-eslint";
import { RuleTester } from "@typescript-eslint/rule-tester";
import * as vitest from "vitest";

import { rule } from "./no-loop-over-enum.js";

RuleTester.afterAll = vitest.afterAll;
RuleTester.it = vitest.it;
RuleTester.itOnly = vitest.it.only;
RuleTester.describe = vitest.describe;

const ruleTester = new RuleTester({
  languageOptions: {
    parser: tseslint.parser,
    parserOptions: {
      projectService: {
        allowDefaultProject: ["*.ts*"],
        defaultProject: "tsconfig.json",
      },
      tsconfigRootDir: path.join(__dirname, "../.."),
    },
  },
});

ruleTester.run("no-loop-over-enum", rule, {
  valid: [
    `enum Values {}`,
    `for (const a in []) {}`,
    `for (const a of []) {}`,
    `
      const values = {};
      for (const a in values) {}
    `,
    `
      const values = [];
      for (const a of values) {}
    `,
  ],
  invalid: [
    {
      code: `
          enum Values {}
          for (const a in Values) {}
      `,
      errors: [
        {
          column: 27,
          endColumn: 33,
          line: 3,
          endLine: 3,
          messageId: "loopOverEnum",
        },
      ],
    },
  ],
});
