const express = require('express')
const app = express()
const PORT = 4000
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const routesUrls = require('./routes/routes')
const noteRouteUrl = require("./routes/noteRoute")
const studentRouteUrl = require('./routes/studentRoutes')
const cors = require('cors')


dotenv.config()
mongoose.set('useCreateIndex', true);
mongoose.set('useNewUrlParser', true);
mongoose.set('debug', true);

mongoose.connect(process.env.DATABASE_ACCESS, () => console.log('Database connected'))

app.use(express.json())
app.use(cors())
app.use('/', routesUrls)
app.use('/', noteRouteUrl)    
app.use('/', studentRouteUrl)    
app.listen(PORT, () => console.log("server is up and running"))