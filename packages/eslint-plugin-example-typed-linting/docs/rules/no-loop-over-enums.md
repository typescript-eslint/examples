# Avoid looping over enums (`example-typed-linting/no-loop-over-enums`)

<!-- end auto-generated rule header -->

Example rule that demonstrates banning `for-in` looping over `enum`s.

## Valid

```ts
const values = {};
for (const a in values) {
}
```

```ts
const values = [];
for (const a of values) {
}
```

## Invalid

```ts
enum Values {}
for (const a of values) {
}
```
