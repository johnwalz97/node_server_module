module.exports = function(request, response, fs){
    if (request.url === '/') {
        if(fs.existsSync("./index.hmtl")){
            fs.readFile('index.html', 'utf8', function (errors, contents){
                response.writeHead(200, {'Content-Type': 'text/html'});  
                response.write(contents);  
                response.end(); 
            });
        }
        else {
            response.writeHead(404);
            response.end('File not found!!!');
        }
    }
    else {
        if (request.url.substring(request.url.length-1) == "/") {
            console.log(request.url);
            request.url = request.url.substring(0, request.url.length-1);
        }
        console.log(request.url);
        if (request.url.substring(request.url.length-5) == ".png" || request.url.substring(request.url.length-5) == ".jpg" || request.url.substring(request.url.length-6) == ".jpeg") {
            console.log("image request");
            if(fs.existsSync("./" + request.url)){
                fs.readFile(request.url.substring(1), function (errors, contents){
                    response.writeHead(200, {'Content-Type': 'image/*'});  
                    response.write(contents);  
                    response.end(); 
                });
            }
            else {
                response.writeHead(404);
                response.end('File not found!!!');
            }
        }
        else if (request.url.substring(request.url.length - 5) == ".css") {
            console.log("css request");
            if(fs.existsSync("./" + request.url)){
                fs.readFile(request.url.substring(1), 'utf8', function (errors, contents){
                    response.writeHead(200, {'Content-Type': 'text/css'});  
                    response.write(contents);  
                    response.end(); 
                });
            }
            else {
                response.writeHead(404);
                response.end('File not found!!!');
            }
        }
        else if (request.url.substring(request.url.length - 4) == ".js") {
            console.log("js request");
            if(fs.existsSync("./" + request.url)){
                fs.readFile(request.url.substring(1), 'utf8', function (errors, contents){
                    response.writeHead(200, {'Content-Type': 'text/javascript'});  
                    response.write(contents);  
                    response.end(); 
                });
            }
            else {
                response.writeHead(404);
                response.end('File not found!!!');
            }
        }
        else if (request.url.substring(request.url.length - 6) == ".html" || request.url.substring(request.url.length - 5) == ".htm") {
            console.log("html request");
            if(fs.existsSync("./" + request.url)){
                fs.readFile(request.url.substring(1), 'utf8', function (errors, contents){
                    response.writeHead(200, {'Content-Type': 'text/html'});  
                    response.write(contents);  
                    response.end(); 
                });
            }
            else {
                response.writeHead(404);
                response.end('File not found!!!');
            }
        }
        else {
            console.log("anon request");
            if(fs.existsSync("./" + request.url + ".html")){
                fs.readFile(request.url.substring(1)+".html", 'utf8', function (errors, contents){
                    response.writeHead(200, {'Content-Type': 'text/html'});  
                    response.write(contents);  
                    response.end(); 
                });
            }
            else {
                response.writeHead(404);
                response.end('File not found!!!');
            }
        }
    }
}