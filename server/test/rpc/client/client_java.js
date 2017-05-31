/**
 * Created by tianzx on 2017/5/31.
 */
/**
 * Created by tianzx on 2017/5/27.
 */

const grpc = require('grpc');

const PROTO_PATH = __dirname + '/../ExampleServices.proto'

const testProto = grpc.load(PROTO_PATH).helloworld

console.log(testProto)

const client = new testProto.Greeter('0.0.0.0:50051',
  grpc.credentials.createInsecure());

client.sayHello({name: 'beijing'}, function(err, response) {
  console.log('ping -> :', response.message);
});
