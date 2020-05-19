const express = require('express');
const router = express.Router();
const user = require('../controller/user');
const auth = require('../auth/auth');

router.route('/user')
    .post(user.createUser)
    .get(auth.isBasicAuthenticated, user.readUser)
    .put(auth.isBasicAuthenticated, user.updateUser)
    .delete(auth.isBasicAuthenticated, user.deleteUser)


router.route('/test')
    .get(function(req, res){
        console.log(req.query);
        res.send("확인");
    })
    .post(function(req,res){
        console.log(req.body);
        res.send("POST 방식");
    })

module.exports = router;

// Create = POST, Read = GET, Update = PUT, Delete = DELETE