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
          "allowForKnownSafePromises": [
            { "from": "package", "name": "FastifyInstance", "package": "fastify" },
            { "from": "package", "name": "FastifyRegister", "package": "fastify" },
            { "from": "package", "name": "FastifyReply", "package": "fastify" },
          ],
          "checkThenables": true
        }
      ]
    }
  }
);
