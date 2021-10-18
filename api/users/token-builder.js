const jwt = require("jsonwebtoken");
const {JWT_SECRET} = require('./secrets/index')

function buildToken(user) {
    const payload = {
      subject: user.id,
      username: user.username,
      user_id: user.user_id
    };
    const options = {
      expiresIn: "1d",
    };
    return jwt.sign(payload, JWT_SECRET, options);
  }

  module.exports = {buildToken}