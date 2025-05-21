# Example: `fastify` and Floating Promise Detection

An example of using [`fastify`](https://nodejs.org/api/test.html) along with the [`@typescript-eslint/no-floating-promises` rule](https://typescript-eslint.io/rules/no-floating-promises) enabled.
By default, the rule does not report on Fastify code because Fastify functions return `PromiseLike`s and not `Promise`s.

It uses the [`allowForKnownSafePromises` rule option](https://typescript-eslint.io/rules/no-floating-promises/#allowforknownsafepromises) to not report on calls to `test()`.

## Setup

```shell
npm i
```

## Usage

```shell
npm run lint
```

There should be no lint reports.

If you enable `checkThenables` in `eslint.config.js`, then there will be reports on `response.header` and `fastify.register`:

```plaintext
.../index.ts
   7:5  error  Promises must be awaited, end with a call to .catch, end with a call to .then with a rejection handler or be explicitly marked as ignored with the `void` operator  @typescript-eslint/no-floating-promises
  11:1  error  Promises must be awaited, end with a call to .catch, end with a call to .then with a rejection handler or be explicitly marked as ignored with the `void` operator  @typescript-eslint/no-floating-promises
```

If you enable the `allowForKnownSafePromises` option from `eslint.config.js`, there should again be no lint reports.
