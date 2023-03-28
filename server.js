const express = require("express");
//import user from router
const user = require("./router/user");
//import port from config
const config = require("config");
const PORT = config.get("PORT");
// importation du connectD qui contient le lien du bd et qui assure que la connection est etablit avec succees ou non
const connectDb = require("./config/connectDB");
const app = express();
//
app.use(express.json());
//Connection du base de donne
connectDb();
//
app.use("/user", user);

const port = PORT || 5000;

app.listen(port, (err) => {
  err ? console.log(error) : console.log(`server is running on port ${port}`);
});
