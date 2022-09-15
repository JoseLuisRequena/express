const express = require('express');
const router = express.Router();
const controller = require('../controllers/login.controller')

/* GET home page. */
router.get('/', controller.index);

//router.post('/', (req, res) => {
//    res.send('Got a POST request')
//});

router.put('/user', (req, res) => {
    res.send('Got a PUT request at /user')
});

router.delete('/user', (req, res) => {
    res.send('Got a DELETE request at /user')
})

module.exports = router;
