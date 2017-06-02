/**
 * Created by tianzx on 2017/5/27.
 */

const grpc = require('grpc');

const PROTO_PATH = __dirname + '/../test.proto'

const testProto = grpc.load(PROTO_PATH)

var array = new Array()

for(var key in testProto){
  console.log(key)
  array['package'] = key;
  for (var key2 in testProto[key] ){
    // array[]
  }
}

console.log(array);
const client = new testProto.testPackage.TestService('0.0.0.0:50051',
  grpc.credentials.createInsecure());
//
// client.ping({name: 'beijing'}, function(err, response) {
//   console.log('ping -> :', response.message);
// });
