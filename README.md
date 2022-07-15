`dist/` directory contains files outputted by webpack. Running `dist/foo.js` file in Node results in
thrown error:

```txt
node dist/bar.js
<project-dir>/webpack-static-blocks/dist/bar.js:110
                foo();
                ^

ReferenceError: foo is not defined
    at <static_initializer> (<project-dir>/webpack-static-blocks/dist/bar.js:110:3)
    at <project-dir>/webpack-static-blocks/dist/bar.js:97:66
    at <project-dir>/webpack-static-blocks/dist/bar.js:124:3
    at Object.<anonymous> (<project-dir>/webpack-static-blocks/dist/bar.js:126:12)
    at Module._compile (node:internal/modules/cjs/loader:1120:14)
    at Module._extensions..js (node:internal/modules/cjs/loader:1174:10)
    at Module.load (node:internal/modules/cjs/loader:998:32)
    at Module._load (node:internal/modules/cjs/loader:839:12)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:81:12)
    at node:internal/main/run_main_module:17:47

Node.js v18.6.0
```

However, running the source file works fine:

```txt
node bar.mjs
foo

```
