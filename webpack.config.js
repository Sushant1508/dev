const path = require('path');
const webpack = require('webpack');

module.exports={
    devtool:'inline-source-map',
    entry:[
        'webpack-dev-server/client?http://127.0.0.1:8080/',
        'webpack/hot/only-dev-server',
        './src'
    ],
    output:{
      path:path.join(__dirname,'public'),
      filename:'bundle.js'
    },
    module:{
      loaders:[
          {
            test:/\.jsx?$/,
            exclude:/node_modules/,
            /*loaders:['react-hot-loader','babel-loader?presets[]=presets=es2015,react']*/
            loader: 'babel-loader',
            query: {
              presets: ['es2015', 'react']
            }
             
          }
      ]

    },
    plugins:[
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoEmitOnErrorsPlugin()
    ]
};
