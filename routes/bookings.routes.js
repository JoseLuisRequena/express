const express = require('express');
const router = express.Router();
const controller = require('../controllers/bookings.controller')

router.delete('/:id', controller.deleteBooking);
router.get('/', controller.getBookings);
router.get('/:id', controller.getBooking);
router.post('/', controller.newBooking);
router.put('/:id', controller.updateBooking);

module.exports = router;