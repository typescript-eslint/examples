// @ts-check

import eslint from "@eslint/js";
import tseslint from "typescript-eslint";

const unused = true;

export default tseslint.config(
  eslint.configs.recommended,
  tseslint.configs.recommendedTypeChecked,
  {
    languageOptions: {
      parserOptions: {
        project: true,
      },
    },
  },
  {
    extends: [tseslint.configs.disableTypeChecked],
    files: ["*.js"],
  }
);
