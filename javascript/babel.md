# babel
## install
```
$ npm install --global babel-cli  babel-preset-2015
```
## using
- options
    - -o: file out
    - -w: watch
    - -d: directory
    - --compact=true: code compact
    - --source-maps: source map, {filename}.map file created
```
$ babel test.js -o test.out.js
$ babel src -d dest
src/a.js -> dest/a.js
src/b.js -> dest/b.js
```