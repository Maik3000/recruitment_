const express = require('express')
const mysql = require ('mysql')
const myconn = require('express-myconnection')

const app = express()
app.set('port', process.env.PORT|| 8000)
const dbOptions = {
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'Password@123',
    database: 'players'
}

//middlewares-------------------------------------------
app.use(myconn(mysql, dbOptions, 'single'))


//routes------------------------------------------------
app.get('/', (req, res)=>{
    res.send('Holi')
} )

//server running----------------------------------------
app.listen(app.get('port'), ()=>{
    console.log('server running on port', app.get('port'))
})