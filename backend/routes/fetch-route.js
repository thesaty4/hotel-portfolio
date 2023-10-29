const express = require('express');
const fetchController = require('../controllers/fetch-controller');
const { signUpUser, signInUser } = require('../controllers/user-action.controllers');
const deleteController = require('../controllers/delete-controller');
const router = express.Router();



// Authentication...
const passport = require('passport');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const jwt = require('jsonwebtoken');

const jwtOptions = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: 'secretKey',
};

passport.use(
    new JwtStrategy(jwtOptions, (payload, done) => {
        // Use the payload to find the user in your database
        // For example, you can fetch the user based on payload.sub
        // If the user exists, call done(null, user);
        // If not, call done(null, false);
    })
);

/**Authentication */
router.post('/api/v1/sign-up', signUpUser);
router.post('/api/v1/sign-in', signInUser);
router.delete('/api/v1/users', deleteController.deleteUsers);

/**Site Information */
router.get('/api/v1/site-info', fetchController.fetchData);
router.get('/api/v1/user-info', passport.authenticate('jwt', { session: false }), fetchController.fetchUserData);

module.exports = router;