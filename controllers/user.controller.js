const User = require("../models/User");
var bcryptjs = require("bcryptjs");
var jwt = require("jsonwebtoken");
const config = require("config");
const secret = config.get("secret");

exports.register = async (req, res) => {
  //destracturing les donnees a utiliser dans le register
  const { fullName, email, password } = req.body;
  const existantUser = await User.findOne({ email });
  if (existantUser) res.status(409).json({ msg: "user existe" });
  try {
    const newUser = new User({
      fullName,
      email,
      password,
    });
    //cryptage du password
    var salt = await bcryptjs.genSalt(10);
    var hash = await bcryptjs.hash(password, salt);
    newUser.password = hash;
    //
    await newUser.save();
    //la creation du token installation jwt
    const payload = {
      _id: newUser._id,
      fullName: newUser.fullName,
    };
    var token = jwt.sign(payload, secret);
    res.send({
      token,
      user: {
        _id: newUser._id,
        fullName: newUser.fullName,
        email: newUser.email,
      },
    });
    //
    res.send(newUser);
  } catch (error) {
    res.send(500).json({ msg: error.message });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    //verifie lexistance d'un user ppar son email
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ msg: "not found" });
    //comparer les mdp
    const isMatch = await bcryptjs.compare(password, user.password);
    if (!isMatch) return res.status(404).json({ msg: "not found" });
    const payload = {
      _id: user._id,
      fullName: user.fullName,
    };
    let token = jwt.sign(payload, secret);
    res.send({
      token,
      user: {
        _id: user._id,
        fullName: user.fullName,
        email: user.email,
      },
    });
  } catch (error) {
    res.send(500).json({ msg: error.message });
  }
};
exports.auth = (req, res) => {
  res.send(req.user);
};
