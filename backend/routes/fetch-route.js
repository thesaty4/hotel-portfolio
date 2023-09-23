const express = require('express');
const fetchController = require('../controllers/fetch-controller');

const router = express.Router();

router.get('/site-info', fetchController.fetchData);
router.get('/user-info', fetchController.fetchUserData);

module.exports = router;