const mysql = require("mysql");
const cfg = {
  host: "localhost",
  user: "wuxiaolin",
  password: "wxl171988",
  database: "test"
};
//创建sql
const INSERT_SQL = `INSERT INTO goods VALUES(?,?,?)`;
const SELECT_SQL = `SELECT * FROM goods`;
//创建连接对象
const conn = mysql.createConnection(cfg);
conn.connect(err => {
  if (err) throw err;
  console.log("连接成功");
  // conn.query(SELECT_SQL, (err, data) => {
  //   console.log("查询结果：", data);
  // });
  conn.query(INSERT_SQL, [5, "草莓", 80], (err, results) => {
    if (err) throw err;
    console.log("插入结果：", results);
    conn.query(SELECT_SQL, (err, results) => {
      console.log("查询结果：", results);
      conn.end();
    });
  });
});
