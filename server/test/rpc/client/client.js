/**
 * Created by tianzx on 2017/5/27.
 */

const grpc = require('grpc');

const PROTO_PATH = __dirname + '/../test.proto'

const testProto = grpc.load(PROTO_PATH).testPackage

console.log(testProto)

const client = new testProto.TestService('0.0.0.0:50051',
  grpc.credentials.createInsecure());

client.ping({}, function(err, response) {
  console.log('ping -> :', response.message);
});
