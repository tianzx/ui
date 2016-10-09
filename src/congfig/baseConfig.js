// /**
//  * Created by tianzx on 2016/9/29.
//  */
// module.exports.path = require('path');
// module.exports.bodyParser = require('body-parser');
// const isProduction = process.env.NODE_ENV === 'production';
// const isDeveloping = !isProduction;
// const projectConfig = require('./config.json');
// const env = process.argv[2];
// module.exports.apiUrlPrefix = projectConfig.api[env];
// /**
//  * diff environment
//  */
// if (isDeveloping) {
//     require('./devConfig')
// } else {
//     require('./prodConfig')
// }
// // export * from