/**
 * Created by tianzx on 2016/10/26.
 */
const data = require('../fake/map');
const map = function (app) {
  app.post('/api/map', function (req, res) {
    // console.log(data);
    //console.log(req.cookies.env);
    res.json(
      {maps: data}
    );
  });
}

module.exports = map;
