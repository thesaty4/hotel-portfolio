const SiteInfo = require('../models/site-info');
const UserInfo = require('../models/user-info');
const fetchController = {};
fetchController.fetchData = async (req, res) => {
    try {
        const result = await SiteInfo.find({});
        console.log("Fetched data : ", result);
        res.status(200).json(result); // Send the result as a JSON response
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ error: 'Internal Server Error' }); // Send an error response
    }
};

fetchController.fetchUserData = async (req, res) => {
    try {
        const result = await UserInfo.find({});
        console.log("User Info:", result);
        res.status(200).json(result);
    } catch (error) {
        console.error("Error fetching user info:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};



module.exports = fetchController;
