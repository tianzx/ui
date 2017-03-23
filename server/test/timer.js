/**
 * Created by tianzx on 2017/3/23.
 */
var start = Date.now();
console.log('开始行走江湖,当前时间:' + start);
setTimeout(function () {
  console.log(Date.now() - start + '毫秒后,突然杀出一位好汉200!\r\n');
}, 200);

setTimeout(function () {
  console.log(Date.now() - start + '毫秒后,突然杀出一位好汉100!\r\n');
}, 100);


console.log("main task stop")
