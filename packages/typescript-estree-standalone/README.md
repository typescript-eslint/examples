# Example: `@typescript-eslint/typescript-estree` Standalone

An example of using the [`@typescript-eslint/typescript-estree`](https://typescript-eslint.io/packages/typescript-estree) package _standalone_ (i.e. without ESLint).
This example shows using it to:

1. Parse a source file in-memory
2. Map from the root ESTree node to its backing TypeScript node
3. Log all TypeScript nodes and their corresponding types

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

Node:
   FirstStatement const hello = 'world';

Node:
   VariableDeclarationList const hello = 'world'

Node:
   VariableDeclaration hello = 'world'
Type:
   "world"

Node:
   Identifier hello
Type:
   "world"

Node:
   StringLiteral 'world'
Type:
   "world"

Node:
   EndOfFileToken
```
