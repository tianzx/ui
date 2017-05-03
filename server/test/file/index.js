/**
 * Created by tianzx on 2017/4/28.
 */
// const readChunk = require('read-chunk');
// const fileType = require('file-type');
// const buffer = readChunk.sync('/Volumes/Samsung_T3/workspace/ui/uploads/bff76b49a627905dd4ac0e9b5f3cf186.jpg', 0, 4100);
//
// console.log(fileType(buffer));
const util = require('../../util/file/index');
const path = util.createFile();
console.log(path);
