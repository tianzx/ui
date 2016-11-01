/**
 * Created by tianzx on 2016/10/26.
 */
const data = require('../fake/map');
const map = function (app) {
  app.post('/api/map', function (req, res) {
    const  map = req.body;
    // console.log(map.sn);
    // console.log(map.time[0]);
    // console.log(map.time[1]);
    //console.log(req.cookies.env);
    res.json(
      {maps: data}
    );
  });
}

module.exports = map;
