const express = require("express");
const fs = require("fs");
const app = express();
const port = 3000;

fs.readFile("./index.html", function(err, html) {
  if (err) {
    throw err;
  }
  var path = "./";
  app.get("/", function(req, res) {
    res.writeHeader(200, { "Content-Type": "text/html" });
    res.write(html);
    res.end();
  });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
