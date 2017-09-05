const express = require('express');
const router = express.Router();
const User = require('../../models/user');
const Trade = require('../../models/trade');
//const Login = require('');
var bcrypt = require('bcrypt');
const myPlaintextPassword = 's0/\/\P4$$w0rD';
const someOtherPlaintextPassword = 'not_bacon';
var saltNum = 10;
const jwt = require('jsonwebtoken');


var user = new User({ name: 'Maria', email: 'maria@me.com', pass: '123', trades: ["599e3a382101ef1a0004b9a5", "599e3cdb2a778f04d84f0c5a"] });
var trade = new Trade({ stock: 'LkE', _creator: user._id });
// Trade.findById("",function (err, user) {


// });

//var user = new User({name: 'Michael'});
user.save(function (err) {
    trade._creator.push(user);
    console.log(user);
    trade.save();
});
trade.save(function (err, tr) {
    console.log(tr);
    user.trades.push(tr);
});
// TEST
// var req = {
//     email: 'asdf@asdf.com',
//     password: 'asdf'
// };

//check if the user is a new user
router.post('/', (req, res) => {
    User.findOne({ email: req.body.email })
        .then((data) => {

            res.json({
                success: false,
                message: 'This Email Address is Already Registered!',
                token: null
            }).catch((err) => {
                res.json(err);
            });
        }
        );
    var hash = bcrypt.hashSync(req.body.password, data.salt);
    var user = new User(req.body);
    user.save(function (err) {
        trade._creator.push(user);
        console.log(user);
        trade.save();
    });
});

    bcrypt.genSalt(saltNum, function (err, salt) {
        bcrypt.hash(myPlaintextPassword, salt, function (err, hash) {
            console.log(hash);

        });
    });
    // LOGIN ROUTE 
    router.post('/', (req, res) => {
        // QUERY DATABASE FOR USER INPUT EMAIL
        User.findOne({ email: req.body.email })

            // IF USER EXISTS, THEN HASH PASSWORD AND CHECK HASH-TO-PASSWORD
            .then((data) => {
                //console.log(data);
                var hash = bcrypt.hashSync(req.body.password, data.salt);

                if (data.password === hash) {
                    var token = jwt.sign({
                        'email': data.email
                    }, process.env.SECRET_WORD, {
                            expires: '24h'
                        });

                    res.json({
                        success: true,
                        message: 'Token ready',
                        token: token
                    });
                } else {
                    res.json({
                        success: false,
                        message: 'Incorrect login information',
                        token: null
                    });
                }
            })

            // ERROR IF EMAIL DOES Not EXIST
            .catch((err) => {
                res.json({
                    success: false,
                    message: 'User not found',
                    token: null
                })
            });

        // OAUTH POP-UP 

        // 
    });

    module.exports = router;