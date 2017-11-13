let express = require('express')
let User = require('../models/user')
let router = express.Router();

router.get('/login', function(req, res) {
    return res.send('这里是登陆界面');
})
router.route('/register')
    // 返回注册页面
    .get(function(req, res) {
        res.render('account/register', { title: '注册' });
    })
    // 接受用户表单
    .post(function(req, res, next) {
        let username = req.body.username || '',
            password = req.body.password || '';
        if (username.length === 0 || password.length === 0) {
            return res.status(400).end('用户名或密码不合法');
        }
        User.create({
            username: username,
            password: password
        }, function(err, user) {
            if (err) return next(err);
            res.status(201).end("注册成功")
        })
        console.log('Register post received!');
        console.log('username:', username, 'password:', password);
        res.end('成功收到POST请求');
    });
module.exports = router;