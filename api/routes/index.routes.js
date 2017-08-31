const express = require("express");
const router = express.Router();
const usersRoute = require("./users/user.route.js");
const loginRoute = require("./login/login.route.js");

router.use("/users", (req, res) => {
    res.send('Successful');
})

router.use("/login", loginRoute);

module.exports = router;