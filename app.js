require('dotenv').config()

const express = require('express')
const app = express()
const expressLayouts = require('express-ejs-layouts')

app.set('view engine', 'ejs')
app.use(expressLayouts)

app.use(express.static(__dirname + '/public'))

app.use('/', require('./router'))

// Se ejecuta si no se encuentra la pagina buscada
app.use((req, res, next) => {
    res.status(404).send('Not Found')
})

const port = process.env.PORT || 4000

app.listen(port, () => console.log('http://localhost:' + port))
