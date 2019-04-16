//实现一个路由器
const http = require("http");
const url = require("url");
let router = [];
class Application {
  get(path, handler) {
    router.push({
      path,
      method: "get",
      handler
    });
  }
  listen() {
    http
      .createServer((req, res) => {
        let { pathname } = url.parse(req.url);
        for (const route of router) {
          route.handler(req, res);
          return;
        }
      })
      .listen(...arguments);
  }
}
module.exports = function() {
  return new Application();
};
