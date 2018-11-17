var express = require('express')
var app = express()

var userRoute = require('./routes/user.routes')

app.use(express.urlencoded())

app.use('/user', userRoute)

app.listen(3500, function() {
  console.log(`
    > server listening
    > on port 3500`)
})