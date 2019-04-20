const Sequelize = require("sequelize");
const config = {
  database: "test",
  user: "wuxiaolin",
  password: "wxl171988",
  host: "localhost"
};
const sequelize = new Sequelize(config.database, config.user, config.password, {
  host: config.host,
  dialect: "mysql"
});
const Users = sequelize.define(
  "users",
  {
    name: Sequelize.STRING,
    age: {
      type: Sequelize.INTEGER,
      validate: {
        min: {
          args: [18],
          msg: "年龄必须大于18岁"
        }
      }
    },
    sex: Sequelize.STRING
  },
  {
    timestamps: false
  }
);
Users.sync({
  force: true
})
  .then(() => {
    //添加数据
    return Users.create({
      name: "wuxiaolin",
      age: 20,
      sex: "女"
    });
  })
  .then(() => {
    //查询
    Users.findAll().then(results => {
      console.log(JSON.stringify(results));
      //更新
      results[0].age = 21;
      results[0].save();
    });
  })
  .catch(err => {
    console.log(err.message);
  });
