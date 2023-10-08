const UserInfo = require('../models/user-info');
const deleteController = {}

deleteController.deleteUsers = async (req, res) => {
    try {
        await UserInfo.deleteMany({}, (error, result) => {
            if (error) {
                res.status(500).json({ error: "Users Deletion Issue occurred.." })
            } else {
                res.status(200).json({ deleteUsers: result })
            }
        })
    } catch {
        res.status(500).json({ error: "Users Deletion Issue occurred.." })
    }
}

module.exports = deleteController;