const wrapper = require("co-mysql");
const mysql = require("mysql");
const co = require("co");
const options = {
  host: "localhost",
  user: "wuxiaolin",
  password: "wxl171988",
  database: "test"
};
const pool = mysql.createPool(options);
const p = wrapper(pool);
p.query("SELECT * FROM GOODS").then(results => {
  console.log(results);
});
// co(function*() {
//   var rows = yield p.query("SELECT 1");
//   // console.log("select:", results);
// })();
