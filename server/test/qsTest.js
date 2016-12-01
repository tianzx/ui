/**
 * Created by tianzx on 2016/12/1.
 */
const qs = require('qs');

const test = {
  queryString:{
    serialNumber: 123,
    timestamp:456
  },
}

const str = qs.stringify(test.queryString);
console.log(str);
