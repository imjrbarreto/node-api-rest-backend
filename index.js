const express = require('express')
const cors = require('cors')
const routerApi = require('./routes')

const { logErrors, errorHandler, boomErrorHandler } = require('./middlewares/error.handler')

const app = express()
const port = 3000

app.use(express.json())

// const whiteList = ['http://localhost:5500', 'https://myapp.co']
// const options = {
//   origin: (origin, callback) => {
//     if (whiteList.includes(origin)) {
//       callback(null, true)
//     } else {
//       callback(new Error('No permitido'))
//     }
//   }
// }
// app.use(cors(options))

// app.use(cors())

app.use(cors({ origin: 'http://localhost:5500/'}))

app.get('/', (req, res) => {
  res.send('hola mi server en express')
})

routerApi(app)

app.use(logErrors)
app.use(boomErrorHandler)
app.use(errorHandler)


app.listen(port, () => {
  console.log('Mi port' + port);
})

