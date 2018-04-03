var http = require('http');

function renderAbout (res, req) {
  res.write("About");
}

function renderOperationalSemantics (res, req) {

}

function renderDenotationalSemantics (res, req) {

}

function renderAxiomaticSemantics (res, req) {

}

function render (res, req) {

}
//create a server object:
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});

  switch (req.url) {
    case "/":  res.write("Home"); break;
    case "/about" : renderAbout(res,req); break;
    case "/operational-semantics" : res.write("Operational Semmantics"); break;
    case "/denotational-sematics" : res.write("Denotational Semmantics"); break;
    case "/axiomatic-semantics" : res.write("Axiomatic Semmantics"); break;
    case "/lambda-calculus" : res.write("Lambda Calculus"); break;
    case "/quit" : res.write("Quit"); break;
    default: res.write("Not Found!"); break;
    
  }

  res.end();
}).listen(8080); //the server object listens on port 8080

console.log("Server is listening on port http://localhost:8080")