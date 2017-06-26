## What is TypeScript?
---
* Language that aligns with the ECMAScript standard and proposals
* Adds optional static typing and type inference
```typescript
let foo: string;
let bar = 'string';

foo = 'string'; // Valid

foo = 10; // Error
bar = 10; // Error (bar has inferred type of 'string')
```
* Compiles to standard JavaScript (ES target is configurable)
