# `eslint-plugin-example-typed-linting`

An example ESLint plugin showing typed linting with `@typescript-eslint/utils`.

For documentation on custom ESLint plugins with typescript-eslint, see: <https://typescript-eslint.io/developers/custom-rules>.

```js
// eslint.config.js
import eslint from '@eslint/js';
import exampleTypedLinting from 'eslint-plugin-example-typed-linting'
import tseslint from 'typescript-eslint';

export default tseslint.config(
    { ignores: ["lib"] },
    eslint.configs.recommended,
    tseslint.configs.recommendedTypeChecked,
    exampleTypedLinting.configs.recommended // 👈
    {
        languageOptions: {
            parserOptions: {
                projectService:true,
                tsconfigRootDir: import.meta.dirname,
            },
        },
    },
);
```

## Rules

<!-- begin auto-generated rules list -->

💭 Requires [type information](https://typescript-eslint.io/linting/typed-linting).

| Name                                                   | Description               | 💭 |
| :----------------------------------------------------- | :------------------------ | :- |
| [no-loop-over-enums](docs/rules/no-loop-over-enums.md) | Avoid looping over enums. | 💭 |

<!-- end auto-generated rules list -->

## Development

To set up this individual package, `cd` to the path to it, then install dependencies:

```shell
cd path/to/eslint-plugin-example-typed-linting
npm i
```

Then build files into the `lib` directory with TypeScript:

```shell
npm run tsc
```

You'll then be able to run standard package scripts:

- `npm run docs`: Regenerates documentation using [`eslint-doc-generator`](https://github.com/bmish/eslint-doc-generator)
  - `npm run docs --check`: Validates that documentation is generated and up-to-date.
- `npm run lint`: Linting this plugin itself with ESLint

### Testing

This example uses [Vitest](https://vitest.dev):

```shell
npm run test
```

Note that files don't need to have been built to the `lib` directory to run tests.
