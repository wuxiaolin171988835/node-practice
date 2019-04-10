const fs = require("fs");
const util = require("util");
//异步回调
fs.readFile("./conf.js", (err, data) => {
  console.log("fs.readFile:", data.toString());
});
//修改为promise形式
//1、util.promisify
let readFile = util.promisify(fs.readFile);
readFile("./conf.js").then(data => {
  console.log("util.promisify:", data.toString());
});
//2、fs.promises  (10版本以上才可以，警告：实验api)
fs.promises.readFile("./conf.js").then(data => {
  console.log("fs.promises:", data.toString());
});

// console.log("end");
