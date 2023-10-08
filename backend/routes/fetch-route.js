const express = require('express');
const fetchController = require('../controllers/fetch-controller');
const setController = require('../controllers/set-controller');
const deleteController = require('../controllers/delete-controller');

const router = express.Router();

/**Authentication */
router.post('/api/v1/sign-up', setController.signUpUser);
router.delete('/api/v1/users', deleteController.deleteUsers);

/**Site Information */
router.get('/api/v1/site-info', fetchController.fetchData);
router.get('/api/v1/user-info', fetchController.fetchUserData);

module.exports = router;