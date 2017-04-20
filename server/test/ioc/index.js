/**
 * Created by tianzx on 2017/4/19.
 */
const utils = require('../../service/index');
// let files = [];
// filess = scanDir("/Volumes/Samsung_T3/workspace/ui/server/controller",files)
// console.log(filess);
utils.Dir.scanDir("/Volumes/Samsung_T3/workspace/ui/server/test");

console.log(utils.Dir.files);
