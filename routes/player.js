var express = require('express');
const player= require('../controller/player.js');
var router = express.Router();
router.post('/pushone',player.pushOne);
router.get('/classement',player.getAll)


module.exports = router;