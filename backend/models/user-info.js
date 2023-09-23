const mongoose = require('mongoose');
const userInfoSchema = new mongoose.Schema({
    "user-id": String,
    "password": String
}, { collection: 'user-info' });

const UserInfo = mongoose.model('UserInfo', userInfoSchema);

module.exports = UserInfo;