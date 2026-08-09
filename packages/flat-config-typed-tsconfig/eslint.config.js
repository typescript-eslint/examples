// @ts-check

import eslint from "@eslint/js";
import { defineConfig } from "eslint/config";
import tseslint from "typescript-eslint";

export async function unecessarilyAsync() {
  return true;
}

export default defineConfig({
  extends: [eslint.configs.recommended, tseslint.configs.recommendedTypeChecked],
  languageOptions: {
    parserOptions: {
      project: "tsconfig.eslint.json",
    },
  },
});
