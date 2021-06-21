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
    res.send('Welcome to Cogency Server API');
})


const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.2xoju.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {

    const serviceCollection = client.db(`${process.env.DB_NAME}`).collection("services");
    const reviewCollection = client.db(`${process.env.DB_NAME}`).collection("reviews");
    const adminsCollection = client.db(`${process.env.DB_NAME}`).collection("admins");
    const orderCollection = client.db(`${process.env.DB_NAME}`).collection("orders");
    console.log('db connect')


    








});




app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})  