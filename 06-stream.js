// stream用于node中流数据的交互接口
const fs = require('fs')
// const stream = require('stream')
const rs = fs.createReadStream('./conf.js');//读取流
const ws = fs.createWriteStream('./conf2.js');//写入流
rs.pipe(ws)
//二进制友好:图片复制
const rs2 = fs.createReadStream('./assets/images/vue.jpg');
const ws2 = fs.createWriteStream('./assets/images/vue_copy.jpg')
rs2.pipe(ws2)
