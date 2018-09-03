const express = require("express");
const router = express.Router();

//Load user model

const User = require("../../models/User")
//@route    GET api/users/test
//@desc     Tests users route
//@access   Public
router.get("/test", (req, res) => {
  res.json({ msg: "users works" });
});

//@route    GET api/users/register
//@desc     Tests users register
//@access   Public
router.post("/register", (req, res)=>{
  User.findone({email: req.body.email})
.then(user=>{
  if(user){
    return res.status(400).json({email:"email already exists"})
  }else{
    const newUser = new User({
      name: req.body.name,
      email: req.body.email,
      avatar,
      password: req.body.password
    })
  }
})
})

module.exports = router;
