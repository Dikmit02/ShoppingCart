const express = require('express')
const path=require('path')
const hbs=require('hbs')
const expressHbs = require('express-handlebars');
require('./db/mongoose')

const routes=require('./routes/index')

const app = express()

const port = process.env.PORT 

const publicDirectoryPath = path.join(__dirname, '/public')
const viewsPath = path.join(__dirname, 'views')

//  use when index.html is a static page 
app.use(express.static(path.join(publicDirectoryPath)))

// //Setup handlebars engine and view location
app.engine('.hbs', expressHbs({defaultLayout: 'layout', extname: '.hbs'}));
app.set('view engine', 'hbs');
// app.set('views', viewsPath)
// hbs.registerPartials(partialPath)

app.use('/',routes)

app.use(express.urlencoded({extended:true}))
app.use(express.json())

 app.listen(port, () => {
    console.log(`Server is up on port ${port}!`)
})
