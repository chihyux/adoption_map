const Koa = require('koa')
const cors = require('@koa/cors')
const axios = require('axios')
const router = require('koa-router')()

const app = new Koa()
app.use(cors())

const apiurl =
  'https://data.coa.gov.tw/Service/OpenData/TransService.aspx?UnitId=QcbUEzN6E6DL&animal_status=OPEN'

async function baseInstance(params, ctx, next) {
  console.log('params', params)
  console.log(apiurl + params)
  try {
    const { data } = await axios.get(apiurl + `&${encodeURI(params)}`)
    ctx.body = data
    return (ctx.status = 200)
  } catch (err) {
    const status = err.response ? err.response.status : 500
    ctx.throw(status, err.message)
  }
}

router.get('/', async (ctx) => {
  const { data } = await axios.get(apiurl + '&$top=1000&$skip=0')
  ctx.body = data
})

router.get('/search/:param', async (ctx, next) => {
  console.log(ctx.params)
  console.log(ctx.url)
  return await baseInstance(ctx.params.param, ctx, next)
})

app.use(router.routes())
const PORT = process.env.PORT || 3001
app.listen(PORT)
