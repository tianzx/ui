/**
 * Created by tianzx on 2017/3/24.
 */
const _ = require('lodash');
const moment = require('moment');

function datetime(value) {
  const data = value;
  return _.map(data,function(value){
    const temp = _.cloneDeep(value);
    temp.createTime = moment.unix(temp.createTime / 1000).format("YYYY-MM-DD HH:mm:ss");
    return temp;
  });
}

module.exports = datetime;
