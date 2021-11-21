const jwt = require("jsonwebtoken");

module.exports = (req, res, next)=>{
    try{
        const token = req.headers.authorization.split(" ")[1];
        const decodedToken = jwt.verify(token, process.env.USER_TOKEN_KEY)
        const userId = decodedToken.userId;
        const userIdReq = req.params.userId;
        console.log("---")
        console.log(userId)
        console.log(userIdReq)
        console.log("---")
        if(userIdReq!==userId){
            throw "Invalid user id"
        }
        else{
            next();
        }
    }
    catch{
        console.log("Invalid user id")
        res.send({message:"noAccessRedirectHome"})
    }
}