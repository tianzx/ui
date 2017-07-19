/**
 * Created by tianzx on 2017/7/7.
 */
/**
 * node --nouse-idle-notification --expose-gc --max-old-space-size=8192 proxy.js
 */
var net = require('net');
var store = {}

function handle_header(header,crlf_len){
  var tup = header.split(" ")
  var expect_body_len = 0
  switch(tup[0]){
    case 'get':
    case 'delete':
      expect_body_len = 0
      break
    case 'set':
      expect_body_len = parseInt(tup[4]) + crlf_len
      break
    case 'gc':
      expect_body_len = 0
      gc()
      break;
  }
  return expect_body_len
}

function handle_body(socket,header,body,call_back){
  var response=""
  var tup = header.split(" ")
  switch(tup[0]){
    case 'get':
      var key = tup[1]
      var obj = store[key]
      if(obj){
        response = "VALUE "+ obj.key+" " + obj.flag+" "  + obj.data.length + "\r\n"
        response += obj.data + "\r\n"
        response += "END\r\n"
      }
      else
        response = "NOT_FOUND\r\n"
      break;
    case 'delete':
      var key = tup[1]
      delete store[key]
      response = "DELETED\r\n"
      break;
    case 'set':
      var obj = {key: tup[1], flag: tup[2], data: body}
      store[obj.key] = obj
      response = "STORED\r\n"
      break;
    case 'gc':
      response = "OK\r\n"
      break;
    default:
      response = "ERROR\r\n"
      break;
  }
  socket.write(response,"binary",call_back)
}

var server = net.createServer(function (socket) {
  // console.log("client: ",socket.remoteAddress)
  /**
   * 设置状态
   * @type {string}
   */
  var user_state = 'reading_header'
  /**
   * 数据缓冲区
   * @type {string}
   */
  var buf = ""
  /**
   * 处理数据头
   * @type {string}
   */
  var header =""
  /**
   * 处理数据内容包
   * @type {string}
   */
  var body = ""
  /**
   * 期望数据内容包长度
   * @type {number}
   */
  var expect_body_len = 0
  /**
   * 换行长度
   * @type {number}
   */
  var CRLF_LEN = 2
  /**
   *Set the encoding for the socket as a Readable Stream.
   *See stream.setEncoding() for more information.
   */
  socket.setEncoding("binary")
  /**
   * 获取数据后回调函数
   */
  socket.on('data',function(data){
    /**
     * 从socket得到的数据写入缓冲区
     */
    buf += data

    // console.log(buf)
    /**
     * socket对象发出事件
     */
    socket.emit('user_event')
  })
  /**
   * socket接受用户事件
   * 状态机
   */
  socket.on('user_event',function(){
    switch(user_state){
      case "reading_header":
        /**
         * init
         * @type {number}
         */
        var pos =-1
        /**
         * \r\n
         */
        if((pos=buf.indexOf('\r\n'))!=-1){
          console.log("\\r\\n")
          header = buf.slice(0,pos)
          buf = buf.slice(pos+2)
          CRLF_LEN =2
        }
        /**
         * \n
         */
        else if((pos=buf.indexOf('\n'))!=-1){
          console.log("\\n")
          header = buf.slice(0,pos)
          buf = buf.slice(pos+1)
          CRLF_LEN =1
        }
        /**
         * change state
         */
        if(pos!=-1){
          user_state = 'reading_body'
          /**
           * handle header
           */
          expect_body_len = handle_header(header,CRLF_LEN)
          socket.emit("user_event")
        }
        break
      case "reading_body":
        console.log("expect_body_len   " + expect_body_len)
        console.log("buf   " + buf.length)
        if(expect_body_len <= buf.length){
          body = buf.slice(0,expect_body_len-CRLF_LEN)
          buf = buf.slice(expect_body_len)
          user_state = 'reading_header'
          handle_body(socket,header,body,
            function(){
              if(buf.length>0)
                socket.emit("user_event")
            }
          )

        }
        break
    }
  })
});
var port = 11211
console.log("listening at "+ port)
server.listen(port, '0.0.0.0')
// setInterval(function(){gc(); console.log(process.memoryUsage())},5000)
