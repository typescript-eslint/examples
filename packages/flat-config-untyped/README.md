# Example: Flat Config (Untyped)

An example of using the [`typescript-eslint`](https://typescript-eslint.io/packages/typescript-eslint) package to lint TypeScript code.
This does not use type information.

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
> eslint src


~/typescript-eslint-examples/packages/flat-config-untyped/src/index.ts
  7:8  error  Unexpected var, use let or const instead  no-var

✖ 1 problem (1 error, 0 warnings)
  1 error and 0 warnings potentially fixable with the `--fix` option.
```
