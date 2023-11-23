# ts.config

This allows to run only the ts file using tsc filename

to enable this write the the following command in the terminal

`tsc --init`

Now look for rootDir and put a path as ./src
Next look for outDir and set path as ./dist

Now automate the compiler `tsc --watch`

To watch node files use `node --watch dist/filename.js`
