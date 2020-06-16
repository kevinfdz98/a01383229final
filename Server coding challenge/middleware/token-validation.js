const TOKEN = require('../config')

function validateToken(req, res, next) {
    
    let sendedToken = req.header.session-exam-token

    if(sendedToken !== TOKEN){
        res.statusMessage = "The 'session-exam-token' is invalid"; 
        return res.status(401).end(); 
    }
    next(); 
}

module.exports = validateToken;
