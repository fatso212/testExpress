import express from "express";
import path from "path";
import open from "open";
import webpack from "webpack";
import config from "../webpack.config.dev";

let port = 3000
let app = express()
const compiler = webpack(config)

app.use(require('webpack-dev-middleware')(compiler, {
        noInfo: true,
        publicPath: config.output.publicPath
    }
))

app.get('/', function(request, response){
    response.sendFile(path.join(__dirname, '../src/index.html'))
})

app.listen(port, function(err){
    if(err) {
        console.log( err)
    } else {
        open('http://localhost:' + port)
    }
})
/*
browsersync to see different browsers
ngrok localtunnel now surge 
automating
grunt
gulp is good more modern code based
npm scripts simplicity less 
    abstraction documentation is better

    babel - compiles down to previous version
        standard javascript
    typescript - expands javascript power
        type safety autocompletion refactoring interfaces
        not standard javascript react es lint problems with typescript
        

        choice is babel

    elm compiles to javascript

    iife 
    AMD
    COMMONJS
    UMD
    ES6 MODULES - more predictable -
     treeshaking - eliminates unnecessary code

    bundlers
        requireJS OLD
        browserify - original takes code using commonjs
        webpack offers loaders css images other
         things not only javascript
         built in webserver
         bundle splitting
         webpack 2 has treeshaking

        rollup -  offers treeshaking - takes away unused code faster code
            but its still new so less support so for applications 
            webpack is better
        jspm
            runtime loader 
            uses systemjs
            has own package manager
            uses rollup

            browserify & webpack most popular
    
        recommendation webpack bundles all files not only javascript

            
debugging with sourcmap
maps webpack back to original source code



    

*/