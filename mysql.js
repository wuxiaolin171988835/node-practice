const mysql = require("mysql");
const cfg = {
  host: "localhost",
  user: "wuxiaolin",
  password: "wxl171988",
  database: "test"
};
//创建连接对象
const conn = mysql.createConnection();
conn.connect(err => {
  if (err) {
    throw err;
  }
});
