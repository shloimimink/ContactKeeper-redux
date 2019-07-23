const express = require('express');
const router = express.Router();

// @route   GET api/user
// @desc    Get logged in user
// @access  Private
router.get('/', (req, res) => {
    res.send('Get loggen in user')
});

// @route   POST api/user
// @desc    Auth user & get token
// @access  Public
router.post('/', (req, res) => {
    res.send('log in user')
});


module.exports = router;

