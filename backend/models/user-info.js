const mongoose = require('mongoose');
/** Login Model */
const userInfoSchema = new mongoose.Schema({
    firstName: String,
    secondName: String,
    email: String,
    password: String
}, { collection: 'user-info' });

const UserInfo = mongoose.model('UserInfo', userInfoSchema);

module.exports = UserInfo;