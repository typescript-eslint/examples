# Example: Flat Config and disable-type-checked

An example of using the [`typescript-eslint`](https://typescript-eslint.io/packages/typescript-eslint) package to lint TypeScript code with type information, disabling type checked rules on `*.js` files.

## Setup

```shell
npm i
```

## Usage

```shell
npm run lint
```

```plaintext
> flat-config-untyped@0.0.0 lint
> eslint .


~/typescript-eslint-examples/packages/flat-config-disable-type-checked/eslint.config.js
  6:7  error  'unused' is assigned a value but never used  @typescript-eslint/no-unused-vars

~/typescript-eslint-examples/packages/flat-config-disable-type-checked/src/index.ts
  8:5  error  Unexpected `await` of a non-Promise (non-"Thenable") value  @typescript-eslint/await-thenable
```
