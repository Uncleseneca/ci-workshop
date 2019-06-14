const express = require('express')
const { json, urlencoded } = require('body-parser')
const morgan = require('morgan')
const cors = require('cors')

const port = process.env.PORT || 3001

const app = express()

app.disable('x-powered-by')

app.use(cors())
app.use(json())
app.use(urlencoded({ extended: true }))
app.use(morgan('dev'))

app.get('/one', (req, res) => {
  res.status(200).send('one')
})
app.get('/two', (req, res) => {
  res.status(200).send('two')
})

app.listen(port, () => {
  console.log(`REST API on http://localhost:${port}`)
})
