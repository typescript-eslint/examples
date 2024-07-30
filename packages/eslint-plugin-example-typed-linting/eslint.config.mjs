import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';

export default tseslint.config(
    { ignores: ["lib"] },
    eslint.configs.recommended,
    ...tseslint.configs.recommendedTypeChecked,
    {
        languageOptions: {
            parserOptions: {
                projectService: {
                    allowDefaultProject: ["*.config.*"],
                    defaultProject: "tsconfig.json"
                },
                tsconfigRootDir: __dirname,
            },
        },
    },
);
