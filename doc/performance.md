##server config
aliyun cloud 

CPU： 2核

内存： 2 GB

操作系统： CentOS 7.2 64位


带宽计费方式： 按固定带宽

当前使用带宽： 1Mbps

实例规格： ecs.s2.small

##wetest
TPS:89.53 ms

RESPONSE TIME :302.44 ms
##ab request
ab -n 10000 -c 1000 -H "Cookie:smartauto-token=12345678" https://ui.tianzx.net:443/index

##ab response
Server Software:        Tengine

Server Hostname:        ui.tianzx.net

Server Port:            443

SSL/TLS Protocol:       TLSv1.2,ECDHE-RSA-AES128-GCM-SHA256,2048,128

TLS Server Name:        ui.tianzx.net

Document Path:          /index

Document Length:        508 bytes

Concurrency Level:      1000

Time taken for tests:   189.285 seconds

Complete requests:      10000

Failed requests:        814

   (Connect: 0, Receive: 0, Length: 814, Exceptions: 0)
   
Non-2xx responses:      814

Total transferred:      10189648 bytes

HTML transferred:       4754103 bytes

Requests per second:    52.83 [#/sec] (mean)

Time per request:       18928.497 [ms] (mean)

Time per request:       18.928 [ms] (mean, across all concurrent requests)

Transfer rate:          52.57 [Kbytes/sec] received

Connection Times (ms)
               min  mean[+/-sd] median   max
Connect:       80  257 546.1    103    5173

Processing:    29 16695 15244.4  12092   60177

Waiting:       27 16695 15244.4  12092   60177

Total:        122 16952 15206.3  12426   65149

Percentage of the requests served within a certain time (ms)

  50%  12426
  
  66%  18842
  
  75%  23667
  
  80%  27831
  
  90%  41023
  
  95%  51314
  
  98%  60123
  
  99%  60141
  
 100%  65149 (longest request)
