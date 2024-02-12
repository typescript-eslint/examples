# Example: Flat Config (Typed)

An example of using the [`typescript-eslint`](https://typescript-eslint.io/packages/typescript-eslint) package to lint TypeScript code with type information.

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
> eslint src


~/typescript-eslint-examples/packages/flat-config-typed/src/index.ts
  8:5  error  Unexpected `await` of a non-Promise (non-"Thenable") value  @typescript-eslint/await-thenable
```
