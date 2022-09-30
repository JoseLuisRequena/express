const express = require('express');
const router = express.Router();
const controller = require('../controllers/rooms.controller')

router.route('/')
    .get(controller.getRooms)
    .post(controller.newRoom);
    
router.route('/:id')
    .get(controller.getRoom)
    .delete(controller.deleteRoom)
    .put(controller.updateRoom);

module.exports = router;