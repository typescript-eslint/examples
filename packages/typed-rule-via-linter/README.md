# Example: Typed Rule Via Linter

An example of running a single typed rule via ESLint's [`Linter`](https://eslint.org/docs/latest/integrate/nodejs-api#linter) class.

## Setup

```shell
npm i
```

## Usage

```shell
npm run example
```

```plaintext
> typescript-estree-standalone@0.0.0 example
> tsx index.ts

[
  {
    ruleId: 'no-for-of-array',
    severity: 2,
    message: 'Unexpected `await` of a non-Promise (non-"Thenable") value.',
    line: 1,
    column: 7,
    nodeType: 'CallExpression',
    messageId: 'await',
    endLine: 1,
    endColumn: 35
  }
]
```
