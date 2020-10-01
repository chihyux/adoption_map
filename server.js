const Koa = require('koa')
const cors = require('@koa/cors')
const axios = require('axios')
const router = require('koa-router')()

const app = new Koa()
app.use(cors())

const baseURL =
  'https://data.coa.gov.tw/Service/OpenData/TransService.aspx?UnitId=QcbUEzN6E6DL&animal_status=OPEN'

async function baseInstance(params, ctx, next) {
  console.log('params', params)
  try {
    const { data } = await axios.get(baseURL + `${encodeURI(params)}`)
    ctx.body = data
    return (ctx.status = 200)
  } catch (err) {
    const status = err.response ? err.response.status : 500
    ctx.throw(status, err.message)
  }
}

router.get('/:param', async (ctx, next) => {
  return await baseInstance(ctx.params.param, ctx, next)
})

router.get('/search/:param', async (ctx, next) => {
  return await baseInstance(ctx.params.param, ctx, next)
})

app.use(router.routes())
const PORT = process.env.PORT || 3001
app.listen(PORT)
