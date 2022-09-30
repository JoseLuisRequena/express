const express = require('express');
const router = express.Router();
const controller = require('../controllers/bookings.controller')

router.route('/')
    .get(controller.getBookings)
    .post(controller.newBooking);

router.route('/:id')
    .get(controller.getBooking)
    .delete(controller.deleteBooking)
    .put(controller.updateBooking);
    
    
module.exports = router;