let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let UserSchema = new Schema({
    username: {
        type: String,
        index: {
            unique: true
        }
    },
    password: String,
    avatar: {
        type: String,
        default: '../public/images/default-avatar.jpeg'
    },
    title: {
        type: String,
        default: '默认标题'
    },
    description: {
        type: String,
        default: '博主很懒，还没有添加任何描述……'
    }
})

module.exports = mongoose.model('user', UserSchema);