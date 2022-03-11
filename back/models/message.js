const Mongoose = require('mongoose');

const messageSchema = new Mongoose.Schema({
    content: {type: String, required: true},
    topic_id: {type: String, required: true},
    user_id: {type: String, required: true},
    creationDate: {type: Date, required: true}
}, {collection: "message"})

module.exports = Mongoose.model('Message', messageSchema);
