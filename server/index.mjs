import express from 'express'
import router from './routes.mjs'
import bodyParser from 'body-parser'
import morgan from 'morgan'
import swaggerUI from 'swagger-ui-express'
import docs from './docs/index.mjs'

var app = express()
/* eslint-disable no-undef*/
const port = process.env.PORT || 3000
const host = '127.0.0.1'

app.use(bodyParser.json())
app.use(morgan('tiny'))
app.use(router)
app.use('/swagger', swaggerUI.serve, swaggerUI.setup(docs))

app.listen(port, '0.0.0.0')
console.log('\x1b[36m%s\x1b[0m', `\nListening at http://${host}:${port}`)
