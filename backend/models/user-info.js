const mongoose = require('mongoose');
const Joi = require('joi');
const lodash = require('lodash');
/** Login Model */
const userInfoSchema = new mongoose.Schema({
    firstName: String,
    secondName: String,
    email: String,
    password: String,
}, { collection: 'user-info' });

const userObject = {
    firstName: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(5),
};
const userValidator = Joi.object(userObject);
const loginValidator = Joi.object(lodash.pick(userObject, ['email', 'password']))
const UserInfo = mongoose.model('UserInfo', userInfoSchema);
module.exports = {
    UserInfo,
    userValidator,
    loginValidator
}