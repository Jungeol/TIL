# nodejs
## npm
### package.json
```
{
    "name": "project-name",
    "author": "your name",
    "private": true,
    "dependencies": {},
    "scripts": {
        "start": "node app"
    }
}
```
### run scripts
```
$ npm start
```
### install module
```
$ npm install {{module-name}} --save
# install local and auto save package.json dependenties.
$ npm install {{module-name}} --global
# install global
```
## use installed module
```
var module = require("module-name");
//.....
```
## user module
### exports
./random_integer.js
```
var MAX = 100;

function randomInteger() {
    return Math.floor(Math.random() * max);
}

module.exports = randomInteger;
//exports only one (function, array, object, string, ...)
```
### use
```
var randomInt = require("./random-integer");
console.log(randomInt());
```
### nodemon
```
npm install nodemon --global
```
### run code by commandline
```
//in browser no require
if (typeof require !== 'undefined' && require.main === module) {
    let parameter = process.argv.slice(2)
}
```