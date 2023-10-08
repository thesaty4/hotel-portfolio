
const UserInfo = require('../models/user-info');
const setController = {};
setController.signUpUser = async (req, res) => {
    const { firstName, secondName, email, password } = req.body;

    try {
        // Check if the email already exists
        const existingUser = await UserInfo.findOne({ email });
        console.log(existingUser);
        if (existingUser) {
            return res.status(409).json({ error: 'Email already exists' });
        } else {
            // Email does not exist, proceed to create a new user
            const newRecord = new UserInfo({ firstName, secondName, email, password });
            const savedUser = await newRecord.save();
            res.status(201).json({ savedUser });
        }

    } catch (error) {
        res.status(500).json({ error: 'An error occurred while creating the user' });
    }
};
module.exports = setController;