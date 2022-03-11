const Topic = require('../models/topic');
const withAuth = require('../withAuth');

module.exports = (app)=> {
    app.post('/api/topic/save', withAuth, async (req, res)=> {

        const data = {
            title: req.body.title,
            description: req.body.description,
            user_id: req.body.user_id,
            creationDate: new Date()
        }

        const topic = await new Topic(data);
        const result = await topic.save();

        res.json({status: 200, result, result})
    })

    app.get('/api/topic/all', async (req, res)=> {

        const topics = await Topic.find({});

        res.json({status: 200, topics: topics})
    })

    
    app.get('/api/topic/:id', async (req, res)=> {
        const id = req.params.id;

        const topic = await Topic.find({_id: id});

        res.json({status: 200, topic: topic[0]})
    })

    app.put('/api/topic/update/:id',  withAuth, async (req, res)=> {
        const id = req.params.id;

        const data = {
            title: req.body.title,
            description: req.body.description,
        }

        const result = await Topic.updateOne({_id: id}, data);

        res.json({status: 200, result: result})
    })

    app.delete('/api/topic/delete/:id',  withAuth, async (req, res)=> {
        const id = req.params.id;

        const result = await Topic.deleteOne({_id: id});

        res.json({status: 200, result: result})
    })

    
}