const express = require('express');
const router = express.Router();
const controller = require('../controllers/rooms.controller')

router.delete('/:room', controller.deleteRoom);
router.get('/', controller.getRooms);
router.get('/:room', controller.getRoom);
router.post('/', controller.newRoom);
router.put('/:room', controller.updateRoom);

module.exports = router;