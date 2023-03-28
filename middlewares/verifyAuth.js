var jwt = require("jsonwebtoken");
const config = require("config");
const secret = config.get("secret");
const User = require("../models/User");

exports.verifyAuth = async (req, res, next) => {
  //la verification se fait a travers token qui contient l id
  var token = req.headers.authorization;

  try {
    //verifier token existe ou non
    var decoded = jwt.verify(token, secret);
    if (!decoded) return res.status(400).json({ msg: " Bad Request" });
    //extraire l id from token et verifier lexistance du user dans cette app
    const user = await User.findById(decoded._id);
    if (!user) {
      return res.status(401).json({ msg: "unauthorized" });
    } else {
      req.user = user;
      next();
    }
  } catch (error) {
    res.status(500).json({ msg: " Internal Server Error" });
  }
};
