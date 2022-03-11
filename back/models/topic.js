const Mongoose = require('mongoose');

const topicSchema = new Mongoose.Schema({
    title: {type: String, required: true},
    description: {type: String, required: true},
    user_id: {type: String, required: true},
    creationDate: {type: Date, required: true}
}, {collection: "topic"})

module.exports = Mongoose.model('topic', topicSchema);
