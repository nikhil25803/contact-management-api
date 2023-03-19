const expressAsyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");

const authenticateToken = expressAsyncHandler((req, res, next) => {
  const authHeader = req.headers['authorization']
  const token = authHeader && authHeader.split(' ')[1]

  if (token == null) return res.sendStatus(403)

  jwt.verify(token, process.env.ACCESS_TOKEN, (err, user,) => {


    if (err) return res.sendStatus(500)
    req.user = user.user

    next();
  })

})

module.exports = authenticateToken;