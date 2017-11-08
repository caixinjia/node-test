var express = require("express");
var router = express.Router();
router.get('/login', function(req, res) {
    return res.send('这里是登陆界面');
})
router.get('/register', function(req, res) {
    return res.send('这里是注册界面');
})
module.exports = router;