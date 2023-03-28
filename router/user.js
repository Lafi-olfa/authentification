//les methodes utilise par la user dans le systeme:
// 1:register 2:login 3: authentification
// Router a installer
const express = require("express");
const { register, login, auth } = require("../controllers/user.controller");
const { registerRules, validatorMiddle } = require("../middlewares/validator");
const { verifyAuth } = require("../middlewares/verifyAuth");
const router = express.Router();
router.post("/register", registerRules(), validatorMiddle, register);
router.post("/login", login);
router.get("/auth", verifyAuth, auth);

module.exports = router;
// router (qui contient le path callback middleware)a importer  dans app .js
