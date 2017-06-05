/**
 * Created by tianzx on 2017/6/5.
 */

var path = require('path')
var grpc = require('grpc');

// const PROTO_PATH = path.resolve(__dirname, '../protos/helloworld.proto')
const PROTO_PATH = "/Volumes/Samsung_T3/workspace/ui/server/test/rpc/test.proto"
console.log(PROTO_PATH)
var hello_proto = grpc.load(PROTO_PATH).helloworld;

function main() {
  var client = new hello_proto.Greeter('192.168.199.151:50051',
    grpc.credentials.createInsecure());
  var user;
  if (process.argv.length >= 3) {
    user = process.argv[2];
  } else {
    user = 'world';
  }
  client.sayHello({name: user}, function(err, response) {
    console.log('Greeting:', response.message);
  });
}

main();
