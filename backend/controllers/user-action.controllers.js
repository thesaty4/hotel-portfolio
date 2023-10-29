
const { UserInfo, userValidator, loginValidator } = require('../models/user-info');
const bcrypt = require('bcrypt');
const _ = require('lodash');
const jwt = require('jsonwebtoken');

const userActionController = {};

// Signup
userActionController.signUpUser = async (req, res) => {
    const { error, value } = userValidator.validate(req.body);
    if (error) {
        res.status(400).json({ error: error.details[0].message });
        return;
    }

    const { email, password } = req.body;

    try {
        // Check if the email already exists
        const existingUser = await UserInfo.findOne({ email });
        if (existingUser) {
            return res.status(409).json({ error: 'Email already exists' });
        } else {
            // Email does not exist, proceed to create a new user 
            const hashedPassword = await bcrypt.hash(password, 10);
            const newRecord = new UserInfo({ ...req.body, password: hashedPassword });
            const savedUser = await newRecord.save();
            res.status(201).json({ savedUser });
        }

    } catch (error) {
        res.status(500).json({ error: 'An error occurred while creating the user' });
    }
};

// Login
userActionController.signInUser = async (req, res) => {
    const { error } = loginValidator.validate(req.body);
    if (error) {
        res.status(400).json({ error: error.details[0].message });
        return;
    }

    try {
        const existUser = await UserInfo.findOne({ email: req.body.email });
        const secretKey = 'hotel-portfolio-secret-key';
        if (existUser) {
            if (await bcrypt.compare(req.body.password, existUser.password)) {
                console.log('before auth')
                const userInfo = _.pick(existUser, ['_id', 'firstName', 'lastName', 'email', 'profile']);
                const token = jwt.sign(userInfo, secretKey, { expiresIn: '1h' });
                res.status(200).json({ ...userInfo, 'x-token': token });
            } else {
                res.status(401).json({ error: "Password does not matched !" });
            }
        } else {
            res.status(400).json({ message: "User does not exist !" });
        }
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while getting the user' });
    }
}

module.exports = userActionController;