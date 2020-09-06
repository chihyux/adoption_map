const Koa = require('koa')
const cors = require('@koa/cors')
const axios = require('axios')
const router = require('koa-router')()

const app = new Koa()
app.use(cors())

const apiurl =
  'https://data.coa.gov.tw/Service/OpenData/TransService.aspx?UnitId=QcbUEzN6E6DL'

router.get('/', async (ctx) => {
  const { data } = await axios.get(apiurl)
  ctx.body = data
})

app.use(router.routes())
const PORT = process.env.PORT || 3001
app.listen(PORT)
