//内建模块
const os = require("os");
//第三方模块
const cpuStat = require("cpu-stat");
const mem = (os.freemem() / os.totalmem()) * 100;
console.log(`内存占用率${mem}%`);
cpuStat.usagePercent((err, percent) => {
  console.log(`cpu占用率${percent}%`);
});

//自定义模块
const conf = require("./conf");
console.log(conf);

// const { rmbToDollar } = require("./currency")(6);
const currency = require("./currency");
console.log(`汇率计算结果${currency(6)(10)}`);
