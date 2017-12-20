//the file isnt transpiled, so cant use es6 modules
//register babael to transpile before running tests
require('babel-register')()
//disable webpack features that mocha doesnt understand
require.extensions['.css'] = function(){};  



