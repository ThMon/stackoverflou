const Message = require('../models/message');
const User = require('../models/user');
const Topic = require('../models/topic');
const withAuth = require('../withAuth');

module.exports = (app)=> {

    app.post('/api/message/save', withAuth, async (req, res)=> {

        const data = {
            content: req.body.content,
            topic_id: req.body.topic_id,
            user_id: req.body.user_id,
            creationDate: new Date()
        }

        const message = await new Message(data);
        const result = await message.save();
     
        res.json({status: 200, result, result})
    })

    app.get('/api/message/all', async (req, res)=> {

        const messages = await Message.find({});

        res.json({status: 200, messages: messages})
    })

    
    app.get('/api/message/:id', async (req, res)=> {
        const id = req.params.id;

        const message = await Message.find({_id: id});

        res.json({status: 200, message: message[0]})
    })

    app.get("/api/message/by_topic/:topic_id", async (req, res)=>{
        const topic_id = req.params.topic_id;
        const messages = await Message.find({topic_id: topic_id});
        if(typeof messages.length !== "number") {
            res.json({status: 500, data: {msg: "internal server error", err: messages}})
        }

        const completeMessages = await Promise.all(messages.map(async (message)=>{
            const user = await User.find({_id: message.user_id})
            console.log("USER", user[0].nickName)
            const m = {...message.toObject(), nickName: user[0].nickName}
            console.log("M", m)
            return m;
        }))

        console.log(completeMessages);

        res.json({status: 200, data: {msg: "message by topic", messages: completeMessages}});

    })

    app.get("/api/message/by_user/:user_id", withAuth, async (req, res)=>{
        const user_id = req.params.user_id;
        const messages = await Message.find({user_id: user_id});
        if(typeof messages.length !== "number") {
            res.json({status: 500, data: {msg: "internal server error", err: messages}})
        }

        const completeMessages = await Promise.all(messages.map(async (message)=>{
            const topic = await Topic.find({_id: message.topic_id})
            console.log("Topic", topic)
            const m = {...message.toObject(), title: topic[0].title}
            console.log("M", m)
            return m;
        }))

        res.json({status: 200, data: {msg: "message by user", messages: completeMessages}});
    })

    app.put('/api/message/update/:id', withAuth, async (req, res)=> {
        const id = req.params.id;

        const data = {
            content: req.body.content
        }

        const result = await Message.updateOne({_id: id}, data);

        res.json({status: 200, result: result})
    })

    app.delete('/api/message/delete/:id', withAuth, async (req, res)=> {
        const id = req.params.id;

        const result = await Message.deleteOne({_id: id});

        res.json({status: 200, result: result})
    })

    
}