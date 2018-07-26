const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const logger = require('koa-logger')
const views = require('koa-views')
const path = require('path')
// const session = require("koa-session")
// const MongoStore = require("koa-session-mongo2")
// const cors = require('koa2-cors')
const serve = require('koa-static');

const router = require('./routes')
// const config = require('../config')
const app = new Koa()

// 服务器log文件
app.use(logger())

app.use(serve(path.resolve('.')));

app.use(bodyParser({}))

app.use(views('' , {
  map: {
      html: 'lodash'
  }
}));

// 使用router
app.use(router.routes(),router.allowedMethods())

// global.models = require('./models')

app.listen(3000)
