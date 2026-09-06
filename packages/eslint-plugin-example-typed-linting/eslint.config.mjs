import eslint from '@eslint/js';
import { defineConfig } from 'eslint/config';
import eslintPlugin from 'eslint-plugin-eslint-plugin'
import tseslint from 'typescript-eslint';

export default defineConfig(
    { ignores: ["lib"] },
    {
        extends: [
            eslint.configs.recommended,
            tseslint.configs.recommendedTypeChecked,
            eslintPlugin.configs['flat/recommended'],
        ],
        languageOptions: {
            parserOptions: {
                projectService: {
                    allowDefaultProject: ["*.config.*"],
                    defaultProject: "tsconfig.json"
                },
                tsconfigRootDir: import.meta.dirname,
            },
        },
    },
);
