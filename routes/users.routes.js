const express = require('express');
const router = express.Router();
const controller = require('../controllers/users.controller')

router.delete('/:id', controller.deleteUser);
router.get('/', controller.getUsers);
router.get('/:id', controller.getUser);
router.post('/', controller.newUser);
router.put('/:id', controller.updateUser);

module.exports = router;
