require('dotenv').config()
const express = require('express')
const router = require('./routers/city')
const db = require('./db/config')

const app = express();

app.use(express.json())
app.use(router)



app.listen(process.env.PORT, ()=>{
    console.log(`server running at ${process.env.PORT}`)
})