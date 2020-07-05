const config=require('../config')
const mongoose = require('mongoose')
console.log(config.DB_URL)
mongoose.connect(config.DB_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
})
  