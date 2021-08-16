const express = require('express');
var cors = require('cors')
const dotenv = require('dotenv');
dotenv.config();

const { dbConnect } = require('./config/dbConnect');


const { route } = require('./routers/serviceRoute');
const reviewRouter = require('./routers/reviewRoute')
const adminRouter =require('./routers/adminRouter')

const app = express();

//dbConnect
dbConnect();

//Middleware
app.use(express.json());
app.use(cors())

//Routes
app.use('/user', reviewRouter, adminRouter);
app.use('/api', route);


//Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`listening on port ${PORT}`))