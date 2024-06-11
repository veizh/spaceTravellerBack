var express = require('express');
const player= require('../controller/player.js');
var router = express.Router();
router.post('/pushone',player.pushOne);
router.get('/classement',player.getAll)
router.get('/test',player.test)


module.exports = router;