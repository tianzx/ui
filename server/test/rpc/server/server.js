/**
 * Created by tianzx on 2017/5/27.
 */
const grpc = require('grpc');

const PROTO_PATH = __dirname + '/../test.proto';

const testProto = grpc.load(PROTO_PATH)

function test(call, callback) {
  callback(null, {message: 'Pong'})
}

const server = new grpc.Server();
server.addProtoService(testProto.testPackage.TestService.service, {
  ping: (call, callback) => {
    console.log("request.....")
    callback(null, "fuck you ")
  }
})
server.bind('0.0.0.0:50051', grpc.ServerCredentials.createInsecure())
server.start()
