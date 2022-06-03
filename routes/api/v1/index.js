const express = require('express');
const router = express.Router();

const usersRoutes = require('./usuarios');

router.use('/usuarios', usersRoutes);

module.exports = router;
