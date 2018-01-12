var path = require("path");

var PATHS = {
    "app" : path.resolve(__dirname,'src/app.js'),
    // "app" : path.resolve(__dirname,'src/workpad/es6-const-let.js'),
    // "app" : path.resolve(__dirname,'src/workpad/es6-arrowfunct.2.js'),
    // "app" : path.resolve(__dirname,'src/workpad/visibilityToggle.js'),
    // "app" : path.resolve(__dirname,'src/workpad/components/c_visibilityToggle.js'),
    // "app" : path.resolve(__dirname,'src/workpad/es6.classes.1.js'),
    // "app" : path.resolve(__dirname,'src/workpad/counter-example.js'),
    "build" : path.resolve(__dirname,'public/')
}

module.exports={
    entry : PATHS.app,
    output : {
        "path" : PATHS.build,
        "filename" : 'bundle.js'

    },
    module: {
        rules: [{
          loader: 'babel-loader',
          test: /\.js$/,
          exclude: /node_modules/
        }, {
          test: /\.s?css$/,
          use: [
            'style-loader',
            'css-loader',
            'sass-loader'
          ]
        }]
      },

    devServer : {
        port : 7000,
        contentBase : path.join(__dirname,'public'),
        inline : true //this allows us to run automatic live updates

    }
}


