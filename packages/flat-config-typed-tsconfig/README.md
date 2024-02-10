# Example: Flat Config Typed with a TSConfig

An example of using the [`typescript-eslint`](https://typescript-eslint.io/packages/typescript-eslint) package to lint TypeScript code with type information and a `tsconfig.eslint.json`.

## Setup

```shell
npm i
```

## Usage

```shell
npm run lint
```

```plaintext
> flat-config-typed@0.0.0 lint
> eslint .


~/typescript-eslint-examples/packages/flat-config-typed-tsconfig/eslint.config.js
  6:8  error  Async function 'unecessarilyAsync' has no 'await' expression  @typescript-eslint/require-await

~/typescript-eslint-examples/packages/flat-config-typed-tsconfig/src/index.ts
  8:5  error  Unexpected `await` of a non-Promise (non-"Thenable") value  @typescript-eslint/await-thenable
```
