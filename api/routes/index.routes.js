const express = require("express");
const router = express.Router();
const usersRoute = require("./users/users.route");
const loginRoute = require("./login/auth.route");

router.use("/users", (req, res) => {
    res.send('Successful');
})

router.use("/login", loginRoute);

module.exports = router;