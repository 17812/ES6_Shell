var path = require("path");

var PATHS = {

    "app" : path.resolve(__dirname,'src/app.js'),
    // "app" : path.resolve(__dirname,'src/workpad/demo/c_count.js'),
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
          use: ['style-loader', 'css-loader']
        }]
      },

    devServer : {
        port : 7000,
        contentBase : path.join(__dirname,'public'),
        inline : true //this allows us to run automatic live updates

    },

    devtool : 'cheap-module-eval-source-map'
}


