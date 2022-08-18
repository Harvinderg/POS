const express = require('express')
const dotenv = require('dotenv')

const indexRouter = require('./routes')


const app = express()

dotenv.config({path: './config/config.env'})

app.use('/api', indexRouter)







const PORT = process.env.PORT || 6000
//Add Data again
app.listen( PORT, (err)=> {
    console.log(`Error Starting Server on PORT ${PORT} in ${process.env.NODE_ENV}`)
});