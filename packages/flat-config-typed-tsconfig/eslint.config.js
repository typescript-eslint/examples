// @ts-check

import eslint from "@eslint/js";
import tseslint from "typescript-eslint";

export async function unecessarilyAsync() {
  return true;
}

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommendedTypeChecked,
  {
    languageOptions: {
      parserOptions: {
        project: "tsconfig.eslint.json",
      },
    },
  }
);
