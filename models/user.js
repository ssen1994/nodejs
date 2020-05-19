const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    userName: String,
    password: String
})

// db.users.find(), 경로가 home이면 homes로 저장됨 
module.exports = mongoose.model('user', UserSchema);
