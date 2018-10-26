const devConfig = require('./config/webpack.dev.js')
const prodConfig = require('./config/webpack.prod.js')

module.exports = env => {
    let mode = env.mode;
    let isProdEnv = mode == "production" ? true : false;

    if(isProdEnv){
        return devConfig(isProdEnv)
    }else{
        return prodConfig(isProdEnv)
    }
}