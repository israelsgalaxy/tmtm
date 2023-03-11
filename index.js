const express = require('express')
const router = require('./routes/routes')

const app = express()
const PORT = 3000
// const PORT = process.env.PORT || 3000
app.use(express.json())
app.use('/', router)

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}!`)
})