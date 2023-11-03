const http = require("http");

// understanding how http in build module in node works
// although there is express to provide us with abstraction looking into what is really going inside the https module

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to Ivey's Server");
  }
  if (req.url === "/about") {
    res.end("Now you are in About Section");
  }

  res.end(`
    <h1>Oops!</h1>
    <p>We can't seem to fine the page you are looking for</p>
    <a href="/">Home</a>
  `);
});

server.listen(5000);
