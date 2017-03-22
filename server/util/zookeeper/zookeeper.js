/**
 * Created by tianzx on 2017/3/21.
 */
const ZooKeeper = require("zookeeper");
const zk_r = new ZooKeeper({
  connect: "115.29.177.82:2181"
  , timeout: 20000
  , debug_level: ZooKeeper.ZOO_LOG_LEVEL_WARN
  , host_order_deterministic: false
});
// zk.connect(function (err) {
//   if (err) throw err;
//   console.log("zk session established, id=%s", zk.client_id);
//   zk.a_create("/backend-server", "some value","", function (rc, error, path) {
//     if (rc != 0) {
//       console.log("zk node create result: %d, error: '%s', path=%s", rc, error, path);
//     } else {
//       console.log("created zk node %s", path);
//       process.nextTick(function () {
//         zk.close();
//       });
//     }
//   });
// });
// zk_r.on_connected().
// then (
//   function (zkk){
//     console.log ("reader on_connected: zk=%j", zkk);
//     return zkk.create ("/node.js2", "some value", ZK.ZOO_SEQUENCE | ZK.ZOO_EPHEMERAL);
//   }
// ).then (
//   function (path) {
//     zk_r.context.path = path;
//     console.log ("node created path=%s", path);
//     return zk_r.w_get (path,
//       function (type, state, path_w) { // this is a watcher
//         console.log ("watcher for path %s triggered", path_w);
//         deferred_watcher_triggered.resolve (path_w);
//       }
//     );
//   }
// ).then (
//   function (stat_and_value) { // this is the response from w_get above
//     console.log ("get node: stat=%j, value=%s", stat_and_value[0], stat_and_value[1]);
//     deferred_watcher_ready.resolve (zk_r.context.path);
//     return deferred_watcher_triggered;
//   }
// ).then (
//   function () {
//     console.log ("zk_reader is finished");
//     process.nextTick( function () {
//       zk_r.close ();
//     });
//   }
// );
