/**
 * Created by tianzx on 2016/10/26.
 */
const data = require('../fake/map');
const map = function (app) {
  app.post('/api/map', function (req, res) {
    // console.log(data);
    res.json(data);
  });
}

module.exports = map;
