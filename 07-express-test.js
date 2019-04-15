const express = require("express");
const app = express();
const fs = require("fs");
const path = require("path");
app.use("/assets", express.static("assets"));
app.get("/", (req, res) => {
  fs.readFile("./index.html", (err, data) => {
    res.statusCode = 200;
    res.setHeader("Content-type", "text/html");
    res.end(data);
  });
});

app.listen(8005);
