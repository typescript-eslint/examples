// @ts-check

import eslint from "@eslint/js";
import tseslint from "typescript-eslint";

export default tseslint.config(
  eslint.configs.recommended,
  tseslint.configs.recommendedTypeChecked,
  {
    languageOptions: {
      parserOptions: {
        projectService: {
          allowDefaultProject: ['*.config.*']
        },
      },
    },
    rules: {
      "@typescript-eslint/no-floating-promises": [
        "error", {
          "allowForKnownSafeCalls": [
            { "from": "package", "name": "test", "package": "node:test" }
          ]
        }
      ]
    }
  }
);
