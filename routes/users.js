const express = require('express');
const router = express.Router();
const User = require('../models/Users.js');

router.post('/create', async (req, res) => {
    try {

    } catch(error) {
        console.error(error);
        res.status(500).send({message: 'There was an error creating the user'});
    }
});

module.exports = router;