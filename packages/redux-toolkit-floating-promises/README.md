# Example: `redux-toolkit` and Floating Promise Detection

An example of using [`redux-toolkit`](https://redux-toolkit.js.org) along with the [`@typescript-eslint/no-floating-promises` rule](https://typescript-eslint.io/rules/no-floating-promises) enabled.
It uses the [`allowForKnownSafePromises` rule option](https://typescript-eslint.io/rules/no-floating-promises/#allowforknownsafepromises) to not report on RTK APIs that create a `SafePromise`, such as `createAsyncThunk`.

## Setup

```shell
npm i
```

## Usage

```shell
npm run lint
```

There should be no lint reports.

If you remove the `allowForKnownSafePromises` option from `eslint.config.js`, there will be:

```plaintext
.../index.test.ts
  4:1  error  Promises must be awaited, end with a call to .catch, end with a call to .then with a rejection handler or be explicitly marked as ignored with the `void` operator  @typescript-eslint/no-floating-promises
```