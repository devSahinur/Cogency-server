const express = require('express')
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const cors = require('cors');
const { ObjectID, ObjectId } = require('bson');
const app = express()
require('dotenv').config();

const port = process.env.PORT ||  5000;

app.use(cors())
app.use(bodyParser.json())















app.get('/', (req, res) => {
    res.send('Welcome to Moto Repair Server API');
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})  