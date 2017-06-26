## Gotchas
---
* Does not include polyfills for new APIs (Object.assign, Promises, etc).
  1. Include polyfills (and their associated type declarations) yourself
  2. Use `lib` compiler option to add type declarations for specific APIs if they're supported in your supported browsers
  ([more info](https://github.com/Microsoft/TypeScript/wiki/What's-new-in-TypeScript#including-built-in-type-declarations-with---lib))

* Third party libraries don't include typings
  1. Install types if available at @types/[package name]
  2. Use module augmentation to write your own type declaration file
  3. Import the module as type `any`

* It can be hard to know _how_ to use the type definitions for third party libraries
  1. MS has reference projects for popular frameworks - <https://www.typescriptlang.org/samples/>
  2. Check if the library has TS documentation or examples
  3. Look at the type declaration file in `node_modules/@types/[library]`

* The typings for third party libraries is _wrong_
  1. Use module augmentation to override the incorrect type
  2. Open issue/PR at <https://github.com/DefinitelyTyped/DefinitelyTyped/issues>
