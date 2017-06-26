## What is TypeScript?
---
* Language that aligns with the latest ECMAScript standard
* Adds optional static typing and type inference
```typescript
let foo: string;
let foo2 = 'bar2';
foo = 'bar'; // Valid
foo = 10; // Error
foo2 = 10; // Error (foo2 has inferred type of 'string')
```
* Compiles to standard JavaScript (ES target is configurable)
