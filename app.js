var http = require('http');
var fs = require('fs');
var os = require('os');

function serveStaticFile(res, path, contentType, responseCode){
	if(!responseCode) responseCode = 200;
	fs.readFile(__dirname + path, function(err,data){
		if(err){
			res.writeHead(500, { 'Content-Type': 'text/plain' });
			res.end('500 - internal error');
		} else {
			res.writeHead(responseCode,
				{ 'Content-Type': contentType });
			res.end(data);
		}
	});
}

function getIP(){
	var interfaces = os.networkInterfaces();
	var addresses = [];

	for (var k in interfaces){
		for (var k2 in interfaces[k]) {
			var address = interfaces[k][k2];
			if (address.family === 'IPv4' && !address.internal){
				addresses.push(address.address);
			}
		}
	}
	//console.log('addr: ' + addresses);
	//console.log('port: 3000');
	return addresses[0];
}

http.createServer(function(req, res){
	var path = req.url.replace(/\/?(?:\?.*)?$/, '').toLowerCase();
	//console.log('requested path: ' + path);

	switch(path){
		case '':
			serveStaticFile(res, '/public/index.html', 'text/html');
			break;
		case '/scripts/client.js':
			serveStaticFile(res, '/scripts/client.js', 'text/javascript');
			break;
		default:
			serveStaticFile(res, '/public/404.html', 'text/html', 404);
			break;
	}
}).listen(3000);

console.log();
console.log('press ^c to terminate');
console.log();
console.log('access to this host from your browser.');
console.log(getIP() + ':3000');
