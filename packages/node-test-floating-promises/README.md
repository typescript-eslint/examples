# Example: `node:test` and Floating Promise Detection

An example of using [`node:test`](https://nodejs.org/api/test.html) along with [`@typescript-eslint/no-floating-promises` rule](https://typescript-eslint.io/rules/no-floating-promises) enabled.
It uses the [`allowForKnownSafeCalls` rule option](https://typescript-eslint.io/rules/no-floating-promises/#allowforknownsafecalls) to not report on calls to `test()`.

## Setup

```shell
npm i
```

## Usage

```shell
npm run lint
```

There should be no lint reports.

If you remove the `allowForKnownSafeCalls` option from `eslint.config.js`, there will be:

```plaintext
.../index.test.ts
  4:1  error  Promises must be awaited, end with a call to .catch, end with a call to .then with a rejection handler or be explicitly marked as ignored with the `void` operator  @typescript-eslint/no-floating-promises
```