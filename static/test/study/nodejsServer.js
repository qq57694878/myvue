var http = require('http');

http.createServer(function (request, response) {
  console.log(  request.method);
  if(request.method==="GET"){
    //处理get请求
    if(request.url == "/json") {
      response.setHeader("Access-Control-Allow-Origin", "*");
      response.writeHead(200, {'Content-Type': 'application/json'});
      var data = {
        "name": "nodejs",
        "value": "stone"
      };
      response.end(JSON.stringify(data));
    }
  }
  else if(request.method==="POST"){
    //处理post请求
    var postdata = "";
    request.on("data",function(postchunk){
      postdata += postchunk;
    });
    request.on("end",function(){
      console.log(postdata);
      if(request.url == "/postjson"){
        response.setHeader("Access-Control-Allow-Origin", "*");
        response.writeHead(200, {'Content-Type': 'application/json'});
        response.end(JSON.stringify(postdata));
      }
    });

  }else{
    //处理其他请求
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end('Hello World\n');
  }




}).listen(8888);

// 终端打印如下信息
console.log('Server running at http://127.0.0.1:8888/');
