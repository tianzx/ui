/**
 * Created by tianzx on 2017/6/1.
 */

const grpc = require('grpc');
const path = require('path');
const fs = require('fs');

class RpcClient {
  constructor(ip, port) {
    this.ip = ip
    this.port = port
    this.services = {}
    this.clients = {}
  }

  // 自动加载proto并且connect
  autoRun(protoDir) {
    fs.readdir(protoDir, (err, files) => {
      if (err) {
        return 'error'
      }
      return files.forEach((file) => {
        const filePart = path.parse(file)
        const serviceName = filePart.name
        const packageName = filePart.name
        console.log(serviceName + " " +packageName);
        const extName = filePart.ext
        const filePath = path.join(protoDir, file)
        if (extName === '.proto') {
          const proto = grpc.load(filePath)
          console.log(proto);
          const Service = proto[packageName][serviceName]
          this.services[serviceName] = Service
          this.clients[serviceName] = new Service(`${this.ip}:${this.port}`,
            grpc.credentials.createInsecure())
        }
      }, files)
    })
  }

  async invoke(serviceName, name, params) {
    return new Promise((resolve, reject) => {
      function callback(error, response) {
        if (error) {
          reject(error)
        } else {
          resolve(response)
        }
      }

      params = params || {}
      if (this.clients[serviceName]
        && this.clients[serviceName][name]) {
        this.clients[serviceName][name](params, callback)
      } else {
        const error = new Error(
          `RPC endpoint: "${serviceName}.${name}" does not exists.`)
        reject(error)
      }
    })
  }
}


function main() {
  // const grpc = require('grpc');
  //
  // const PROTO_PATH = __dirname + '/../ExampleServices.proto'
  //
  // const testProto = grpc.load(PROTO_PATH).helloworld
  //
  // console.log(testProto)
  //
  // const client = new testProto.Greeter('0.0.0.0:50051',
  //   grpc.credentials.createInsecure());
  //
  // client.sayHello({name: 'beijing'}, function(err, response) {
  //   console.log('ping -> :', response.message);
  // });
  // const rpcClient = new RpcClient(config.grpc.ip, config.grpc.port)
  const rpcClient = new RpcClient('0.0.0.0', 50051)
  rpcClient.autoRun(path.join(__dirname, '../proto/'))

  try {
    // expected: Pong
    // const result = await rpcClient.invoke('testService', 'ping');
  } catch (err) {
    // logger.error(err)c

  }

}

main()
module.exports = RpcClient;
