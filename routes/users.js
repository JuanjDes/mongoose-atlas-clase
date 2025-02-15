const express = require('express');
const router = express.Router();
const User = require('../models/Users.js');

router.post('/create', async (req, res) => {
    try {
        const user = await User.create(req.body);
        res.status(200).send(user);
    } catch(error) {
        console.error(error);
        res.status(500).send({message: 'There was an error creating the user'});
    }
});

router.get('/get-all', async (req, res) => {
    try {
        const users = await User.find({});
        // mostramos todos los usuarios
        res.status(200).send(users);
        
    } catch(error) {
        console.error(error);
        res.status(500).send({message: 'There was an error retrieving the users'});
    }
});

module.exports = router;