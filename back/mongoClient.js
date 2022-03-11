const mongoose = require('mongoose');
const DB = "stackoverflou";
const URI = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.5jg2q.mongodb.net/${DB}?retryWrites=true&w=majority`;
const MongoDBClient = {
    initialize: () => {
        try {
            console.log("try")
            const client = mongoose.connect(URI, 
                { 
                    useNewUrlParser: true, 
                    useUnifiedTopology: true
                })

            client.then(() => {return console.log(`successfully connected to DB: ${DB}`)})
            .catch((err)=> {console.log(err)})
        } catch(err) {
             throw Error(err)
            console.log(err)
        }
    }
}

module.exports = MongoDBClient;