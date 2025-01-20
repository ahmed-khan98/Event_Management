const jwt = require("jsonwebtoken");


const generateNewToken = (userId,name) => {
    return jwt.sign({userId,name},process.env.JWT_KEY,{expiresIn:"1d"}) 
};

module.exports = generateNewToken