var express = require('express');
var app = express();
var fs = require('fs');  
var path = require('path');  
var mineType = require('mime-types');  
  
 

app.get('/getimg', function (req, res) {
	//随机图片序号
	var inedx = parseInt(10*Math.random());
	//生产图片地址
	var imgurl = "./a"+index+".png";
	//获取图片
	var filePath = path.resolve('imgurl'); 
	//转码
    var data = fs.readFileSync(filePath);  
	data = new Buffer(data).toString('base64');  
	var base64 = 'data:' + mineType.lookup(filePath) + ';base64,' + data; 
	
	var backdata = 
   	res.send('Hello World');
})
 
var server = app.listen(8081, function () {
 
  var host = server.address().address
  var port = server.address().port
 
  console.log("应用实例，访问地址为 http://%s:%s", host, port)
 
})