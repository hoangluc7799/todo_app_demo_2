const express = require('express');
const mongoose = require('mongoose');

const { redisClient } = require('../config/redis');

const router = express.Router();

// Trang User
router.get('/', (req, res) => {

    res.render('user/tasks/index', {
        title: 'Todo App',
        layout: 'user'
    });

});


module.exports = router;