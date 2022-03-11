const express = require('express');
const app = express();
const port = 9000;
require('dotenv').config()
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
const cors = require('cors');
app.use(cors());
const MongoDBClient = require('./mongoClient');
const userRoutes = require('./routes/userRoutes')
const topicRoutes = require('./routes/topicRoutes');
const messageRoutes = require('./routes/messageRoutes');
const authRoutes = require('./routes/authRoutes')

app.get('/', (req, res, next)=> {
    res.json({status: 200, msg: "ok"})
})

userRoutes(app);
topicRoutes(app);
messageRoutes(app);
authRoutes(app);

app.listen(port, ()=>{
    console.log(`Application exemple à l'écoute sur le port ${port}!`)
    MongoDBClient.initialize();
})