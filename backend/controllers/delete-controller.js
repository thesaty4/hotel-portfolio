const UserInfo = require('../models/user-info');
const deleteController = {}

deleteController.deleteUsers = async (req, res) => {
    try {
        const users = await UserInfo.deleteMany({});
        console.log(users);
        res.status(200).send(users);
    } catch {
        res.status(500).json({ error: "Users Deletion Issue occurred.." })
    }
}

module.exports = deleteController;