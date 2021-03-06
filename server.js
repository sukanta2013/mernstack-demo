const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const users = require("./routes/api/users");
const profile = require("./routes/api/profile");
const posts = require("./routes/api/posts");

const app = express();
//Body parser midddleware
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
//DB config
const db = require("./config/keys").mongoURI;
//connecting to database
mongoose
  .connect(db)
  .then(() => {
    console.log("database connected!");
  })
  .catch(err => console.log(err));

app.get("/", (req, res) => {
  res.send("Hello There!123");
});

//use routes
app.use("/api/users", users);
app.use("/api/profile", profile);
app.use("/api/posts", posts);

const port = process.env.port || 3000;
app.listen(port, () => console.log(`server running port ${port}`));
