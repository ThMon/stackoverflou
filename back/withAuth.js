const jwt = require('jsonwebtoken');
const secret = process.env.SECRET;

module.exports = (req, res, next)=>{
    const token = req.headers.authorization;

    if(token === undefined) {
        res.json({status: 404, data: {msg: "Token not found"}})
    } else {
        jwt.verify(token, secret, (err, decoded)=>{
            if(err){
                res.json({status: 401, data: {msg: "Invalid Token !!!"}})
            } else {
                req.body._id = decoded.id;
                next();
            }
        })
    }
}