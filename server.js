//http modulezxdf[]
const http = require('http');
const util = require('util');
const fs = require('fs');

// Renders index.html
function renderHome (res, req) {
    fs.readFile('index.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    res.end();
  });
}

// Renders about.html
function renderAbout (res, req) {
  fs.readFile('about.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    res.end();
  });
}

// Renders operational-semantics.html
function renderOperationalSemantics (res, req) {
  fs.readFile('operational-semantics.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    res.end();
  });
}

// Renders denotational-semantics.html
function renderDenotationalSemantics (res, req) {
  fs.readFile('denotational-semantics.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    res.end();
  });
}

// Renders axiomatic-semantics.html
function renderAxiomaticSemantics (res, req) {
  fs.readFile('axiomatic-semantics.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    res.end();
  });
}

// Renders lambda-calculus.html
function renderLambdaCalculus (res, req) {
  fs.readFile('lambda-calculus.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    res.end();
  });
}


// Main web server
http.createServer(function (req, res) {
  
  // Sets content type for html files
  res.writeHead(200, {'Content-Type': 'text/html'});

  // Switch/Case for routes
  switch (req.url) {
  	case "/":  renderHome(res, req); break;
  	case "/about" : renderAbout(res,req); break;
  	case "/operational-semantics" : renderOperationalSemantics(res, req); break;
  	case "/denotational-semantics" : renderDenotationalSemantics(res, req); break;
  	case "/axiomatic-semantics" : renderAxiomaticSemantics(res, req); break;
  	case "/lambda-calculus" : renderLambdaCalculus(res, req); break;
  	case "/quit" : res.write("Thanks for checking us out! Bye Bye! *insert waving emoji*"); break;
  	default: res.write("Not Found!"); break;
  	
  }

}).listen(8080); //Starts web server on port 8080

console.log("Server is listening on port http://localhost:8080");