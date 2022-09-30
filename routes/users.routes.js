const express = require('express');
const router = express.Router();
const controller = require('../controllers/users.controller')

router.route('/')
    .get(controller.getUsers)
    .post(controller.newUser);
router.route('/:id')
    .get(controller.getUser)
    .delete(controller.deleteUser)
    .put(controller.updateUser);

module.exports = router;
