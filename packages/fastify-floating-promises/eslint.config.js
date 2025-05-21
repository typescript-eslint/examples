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
          // 1. Switch this to true to start reporting on Fastify Promise types
          "checkThenables": false,

          // 2. Un-comment this to allow known safe Fastify Promise types
          // "allowForKnownSafePromises": [
          //   { "from": "package", "name": "FastifyInstance", "package": "fastify" },
          //   { "from": "package", "name": "FastifyRegister", "package": "fastify" },
          //   { "from": "package", "name": "FastifyReply", "package": "fastify" },
          // ],
        }
      ]
    }
  }
);
